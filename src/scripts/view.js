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

    this.mapData = (weather, cb) => {
      const targets = ['now', 'hourOne', 'hourTwo', 'hourThree'];
      const details = ['desc', 'humi', 'perc', 'wind'];
      const weatherDetails = {};
      for (var i = 0; i < 4; i++) {
        const dayDetails = weather.item[i].description[0].match(/: ([^,]+)/g)
        .map(match => ( match.replace(/(: )/, '') ))
        .reduce((result, item, index) => {
          result[details[index]] = item;
          return result;
        }, {})

        dayDetails.temp = weather.item[i].title[0].match(/([0-9][0-9]F)/)[0].replace(/F/, '°');
        if (i === 0) {
          dayDetails.feel = weather.item[i].description[0].match(/, ([^,]+)/)[1];
        } else {
            dayDetails.hour = weather.item[i].title[0].match(/([0-9]?[0-9] (AM|PM))/g)[0].replace(/\s/g, '');
            console.log(dayDetails.hour)
        }
        weatherDetails[targets[i]] = dayDetails;
      }

      cb(weatherDetails);
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
    this.rows = data;

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
    Logger.log('Rendering a new view.');
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
    const weather = this.rows[0].weather.rss.channel[0];

    this.mapData(weather, res => {
      this.dateContainer.innerHTML = this.getDate();
      this.timeContainer.innerHTML = this.getTime();
      this.nowTemp.innerHTML       = res.now.temp;
      this.nowDesc.innerHTML       = res.now.desc;
      this.nowFeel.innerHTML       = res.now.feel;
      this.nowImag.src             = weather.item[0]['media:content'][0].$.url;
      this.firstHour.innerHTML     = res.hourOne.hour;
      this.firstTemp.innerHTML     = res.hourOne.temp;
      this.firstImag.src           = weather.item[1]['media:content'][0].$.url;
      this.firstRain.innerHTML     = res.hourOne.perc
      this.secondHour.innerHTML    = res.hourTwo.hour;
      this.secondTemp.innerHTML    = res.hourTwo.temp;
      this.secondImag.src          = weather.item[2]['media:content'][0].$.url;
      this.secondRain.innerHTML    = res.hourTwo.perc
      this.thirdHour.innerHTML     = res.hourThree.hour;
      this.thirdTemp.innerHTML     = res.hourThree.temp;
      this.thirdImag.src           = weather.item[3]['media:content'][0].$.url;
      this.thirdRain.innerHTML     = res.hourThree.perc;
    });

    Logger.log(`The view has ${this.rows.length} data rows.`);
  }
}

module.exports = View;
