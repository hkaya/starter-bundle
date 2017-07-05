import moment from 'moment';

require('../styles/css/global.css');
import Placeholder from './cortex/placeholder.js';
import Logger from './cortex/logger.js';
import Tracker from './cortex/tracker.js';


class View {
  constructor() {
    this.placeholder = new Placeholder();
    this.rows = [];
    this.deviceId = '';
    this.productionEnv = process.env.NODE_ENV !== 'development';
    this.strUtcOffset = '-0400';
    const self = this;
    this.count = 0;
    this.cachedData = [];
    this.lastCachedHour = undefined;
    this.weather = [];

    this.creativeContainer = window.document.getElementById(
    'creativeContainer');

    this.creativeContainerDebugger = window.document.getElementById(
    'creativeContainer-debugger');

    this.dateContainer = window.document.getElementById('date');
    this.timeContainer = window.document.getElementById('time');

    this.nowTemp = window.document.getElementById('nowTemp');
    this.nowDesc = window.document.getElementById('nowDesc');
    this.nowFeel = window.document.getElementById('nowFeel');
    this.nowImag = window.document.getElementById('nowImag');

    this.firstHour = window.document.getElementById('firstHour');
    this.firstTemp = window.document.getElementById('firstTemp');
    this.firstImag = window.document.getElementById('firstImag');
    this.firstRain = window.document.getElementById('firstRain');

    this.secondHour = window.document.getElementById('secondHour');
    this.secondTemp = window.document.getElementById('secondTemp');
    this.secondImag = window.document.getElementById('secondImag');
    this.secondRain = window.document.getElementById('secondRain');

    this.thirdHour = window.document.getElementById('thirdHour');
    this.thirdTemp = window.document.getElementById('thirdTemp');
    this.thirdImag = window.document.getElementById('thirdImag');
    this.thirdRain = window.document.getElementById('thirdRain');

    this.getDate = () => (
      moment().utcOffset(self.strUtcOffset).format('dddd, MMMM D')
    )

    this.getTime = () => (
      moment().utcOffset(self.strUtcOffset).format('h:mm a') 
    )

    this.getHour = () => (
      moment().utcOffset(self.strUtcOffset).format('h') 
    )

    this.mapData = weather => {
      const targets = ['now', 'hourOne', 'hourTwo', 'hourThree'];
      const details = ['desc', 'humi', 'perc', 'wind'];
      let weatherDetails = {};
      for (var i = 0; i < 4; i++) {
        let dayDetails = weather.item[i].description[0].match(/: ([^,]+)/g)
        .map(match => ( match.replace(/(: )/, '') ))
        .reduce((result, item, index) => {
          result[details[index]] = item;
          return result;
        }, {})

        if (i === 0) {
          dayDetails.temp = weather.item[i].title[0].replace('F', '°');
          const feel = weather.item[i].description[0].split(",")[1].trim()
          dayDetails.feel = `${feel.substring(0, feel.length - 1)}°`
        } else {
          const target = weather.item[i].title[0].split(',')[0];
          const temp = target.substring(target.length - 4, target.length).replace('F', '°');
          const hour = target.substring(0, target.indexOf(":")).replace('  ', '').replace(' ', '');

          dayDetails.temp = temp;
          dayDetails.hour = hour;
        }
        weatherDetails[targets[i]] = dayDetails;
      }

      let paths = [];
      for (var j = 0; j < 4; j++) {
        let path = weather.item[j]['media:content'][0].$.url;
        paths.push(`../images/${path.substring(path.lastIndexOf('_') + 1, path.lastIndexOf('.png'))}.png`)

      }

      this.nowImag.src = paths[0];
      this.firstImag.src = paths[1];
      this.secondImag.src = paths[2];
      this.thirdImag.src = paths[3];

      this.nowTemp.innerHTML = weatherDetails.now.temp;
      this.nowDesc.innerHTML = weatherDetails.now.desc;
      this.nowFeel.innerHTML = weatherDetails.now.feel;
      this.firstHour.innerHTML = weatherDetails.hourOne.hour;
      this.firstTemp.innerHTML = weatherDetails.hourOne.temp;
      this.firstRain.innerHTML = weatherDetails.hourOne.perc
      this.secondHour.innerHTML = weatherDetails.hourTwo.hour;
      this.secondTemp.innerHTML = weatherDetails.hourTwo.temp;
      this.secondRain.innerHTML = weatherDetails.hourTwo.perc
      this.thirdHour.innerHTML = weatherDetails.hourThree.hour;
      this.thirdTemp.innerHTML = weatherDetails.hourThree.temp;
      this.thirdRain.innerHTML = weatherDetails.hourThree.perc;
      console.log(weatherDetails)
    }

    this.checkIfData = (weather, cb) => {
      if (weather.item[0].title[0].length <= 1) {
        cb(true);
      } else {
        const newWeather = JSON.parse(JSON.stringify(weather));
        this.cachedData = newWeather;
        this.lastCachedHour = Number(newWeather.item[1].title[0].split(':')[0].trim().substring(0,2).trim())
        cb(false);
      }
    }
  }

  /**
   * Set the incoming data from Silo.
   *
   * This method will only get called when the app is no longer visible on the
   * screen. The Incoming data is expected to be a non-empty array of objects
   * as retreived from Silo.
   *
   * This method is a good place to manipulate the incoming data as needed.
   *
   * It is strongly recommended to preload/cache images or any other media
   * files. Consider creating the necessary invisible DOM elements in this
   * method. In the render() method you can make the needed elements visible.
   *
   * e.g.
   * setData(rows) {
   *   for (const row of rows) {
   *     const img = new window.Image();
   *     img.src = row.image_url;
   *     img.onerror = () => {
   *       // log error
   *     }
   *     img.className = 'invisible';
   *     this.container.appendChild(img);
   *     this.images.push(img);
   *   }
   * }
   *
   * _render() {
   *   const img = this._selectImg();
   *   img.className = 'visible';
   * }
   *
   *
   * @param {array} data The data rows.
   *
   */
  setData(data) {
    // Verify that the data matches Silo structure.
    this.rows = JSON.parse(JSON.stringify(data));

    if (data && data.length > 0) {
      this.deviceId = data[0]._device_id;
    }
  }

  /**
   * Render the placeholder or the main view.
   *
   * Every time the app receives a 'hidden' event this method will get called.
   *
   */
  render() {
    if (!window.document.getElementById(GLOBAL_VARS.placeholderID)) {
      this.placeholder.render();
    }

    if (this.productionEnv) {
      Tracker.track(this.deviceId, GLOBAL_VARS.campaign, 'tracked');
    }

    this._render();
  }

  /**
   * Update the view before displaying it on the screen.
   *
   * Every time the app receives a 'visible' event this method will get called.
   * This is the place to make changes to the view before it becomes visible
   * on the screen. For instance, if you want to display the current time
   * accurately, you should update the time data on this method.
   *
   * Prefer rendering the view in this._render() as much as possible as that
   * method will get called when the app is in the background. Only implement
   * this method when you need to perform some actions right before the view
   * becomes visible on the screen.
   *
   */

  updateView() {
    this.dateContainer.innerHTML = this.getDate();
    this.timeContainer.innerHTML = this.getTime();
  }

  /**
   * Handles rendering of the main view.
   *
   * This method will get called every time the app receives a 'hidden' event
   * and we have data stored in this.rows. This is the place where you actually
   * render some content on the screen based on the incoming dynamic data.
   *
   * Current implementation simply iterates over rows and displays a single row
   * every time the app is visible on the screen.
   *
   * It is important to be as efficient as possible in this method. Try to
   * make as few DOM manipulations as possible. Reusing DOM elements is better
   * than recreating them every time this method is called.
   *
   */
  _render() {
    this.creativeContainer.style.display = 'block';
    if (this.rows === null || this.rows.length === 0) {
      return;
    }
    this.placeholder.hide();

    const weather = JSON.parse(JSON.stringify(this.rows[0].weather.rss.channel[0]));

    this.checkIfData(weather, useCache => {
      if (this.cachedData.length === 0) {
        this.placeholder.show();
        return;
      }
      if (useCache) {
        if (this.lastCachedHour !== Number(this.getHour())) {
          this.placeholder.show();
        }
        this.mapData(this.cachedData);
      } else {
        this.mapData(weather);
      }
    });

    Logger.log(`The view has ${this.rows.length} data rows.`);
  }
}

module.exports = View;
