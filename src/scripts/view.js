require('../styles/css/global.css');
import Placeholder from './cortex/placeholder.js';
import Logger from './cortex/logger.js';
import Tracker from './cortex/tracker.js';

class View {
  constructor() {
    this.placeholder = new Placeholder();
    this.rows = [];
    this.deviceId = '';
    this.index = 0;
    this.productionEnv = process.env.NODE_ENV !== 'development';

    this.creativeContainer = window.document.getElementById(
		'creativeContainer');

    this.creativeContainerDebugger = window.document.getElementById(
    'creativeContainer-debugger');

    this.storyDiv = window.document.getElementById(
    'story');

    this.storyHeader = window.document.getElementById(
    'storyHeader');

    this.updateIndex = () => {
      this.index++;
      if (this.rows[0].news.rss.channel[0].item[this.index] === null ||
      this.rows[0].news.rss.channel[0].item[this.index] === undefined) {
        this.index = 0;
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
    this.rows = data;

    if (data && data.length > 0) {
      this.deviceId = data[0]._device_id;

      for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
      }
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
    if (this.rows === null || this.rows.length === 0) {
      return;
    }
    setTimeout(() => {
      this.updateIndex();
      this.storyDiv.style.backgroundImage= `url(${this.rows[0].news.rss.channel[0].item[this.index]['media:content'][0].$.url}`
      this.storyHeader.innerText = this.rows[0].news.rss.channel[0].item[this.index].title;
    }, 7500)
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
    }else{
      this.placeholder.hide();
      this.updateIndex();
    }

    Logger.log(`The view has ${this.rows.length} data rows.`);
  }
}

module.exports = View;
