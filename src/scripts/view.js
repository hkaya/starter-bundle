require('../styles/css/global.css');
import Placeholder from './cortex/placeholder.js';
import Logger from './cortex/logger.js';
import Tracker from './cortex/tracker.js';
import moment from 'moment';

class View {
  constructor() {
    this.placeholder = new Placeholder();
    this.rows = [];
    this.deviceId = '';
    this.index = 0;
    this.productionEnv = process.env.NODE_ENV !== 'development';
    this.strUtcOffset = '-0400';
    const self = this;

    this.creativeContainer = window.document.getElementById(
    'creativeContainer');

    this.creativeContainerDebugger = window.document.getElementById(
    'creativeContainer-debugger');

    this.dateContainer = window.document.getElementById('date');
    this.timeContainer = window.document.getElementById('time');

    this.storyDiv = window.document.getElementById(
    'story');

    this.storyHeader = window.document.getElementById(
    'storyHeader');

    this.getDate = () => (
      moment().utcOffset(self.strUtcOffset).format('dddd, MMMM D')
    )

    this.getTime = () => (
      moment().utcOffset(self.strUtcOffset).format('h:mm a') 
    )

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
    this.rows = [{
  _update_date: 'Jun 14th, 2017 10:51 am',
  _device_id: '*',
  _index: 'nyc',
  news: {  
  "rss":{  
    "$":{  
      "version":"2.0",
      "xmlns:media":"http://search.yahoo.com/mrss/",
      "xmlns:atom":"http://www.w3.org/2005/Atom",
      "xmlns:photo":"http://www.pheed.com/pheed/",
      "xmlns:dc":"http://purl.org/dc/elements/1.1/"
    },
    "channel":[  
      {  
        "title":[  
          "NBC New York - LinkNYC"
        ],
        "description":[  
          ""
        ],
        "copyright":[  
          "Copyright 2017"
        ],
        "link":[  
          "http://www.nbcnewyork.com/news/linknyc"
        ],
        "image":[  
          {  
            "url":[  
              "http://media.nbcnewyork.com/designimages/4NY_Horizontal.jpg"
            ],
            "title":[  
              "NBC New York"
            ],
            "link":[  
              "http://www.nbcnewyork.com"
            ]
          }
        ],
        "atom:link":[  
          {  
            "$":{  
              "href":"http://www.nbcnewyork.com/news/linknyc",
              "rel":"self",
              "type":"application/rss+xml"
            }
          }
        ],
        "language":[  
          "en-us"
        ],
        "pubDate":[  
          "Mon, 19 Jun 2017 11:24:20 -0400"
        ],
        "lastBuildDate":[  
          "Mon, 19 Jun 2017 11:24:20 -0400"
        ],
        "generator":[  
          "NBC Owned Television Stations"
        ],
        "item":[  
          {  
            "dc:creator":[  
              ""
            ],
            "title":[  
              "Long Island Rail Road Delays"
            ],
            "link":[  
              "http://www.nbcnewyork.com/news/linknyc/Long-Island-Rail-Road-Delays-Worst-10-Years-427259533.html"
            ],
            "guid":[  
              "http://www.nbcnewyork.com/news/linknyc/Long-Island-Rail-Road-Delays-Worst-10-Years-427259533.html"
            ],
            "pubDate":[  
              "Thu, 08 Jun 2017 17:31:42 -0400"
            ],
            "category":[  
              "Article"
            ],
            "media:content":[  
              {  
                "$":{  
                  "url":"http://media.nbcnewyork.com/images/lirr+credit+rick+holtman.jpg",
                  "medium":"image",
                  "type":"image/jpeg"
                },
                "media:title":[  
                  {  
                    "_":"Commuters pack a LIRR platform at Penn Station Tuesday",
                    "$":{  
                      "type":"html"
                    }
                  }
                ],
                "media:description":[  
                  {  
                    "_":"Commuters pack a LIRR platform at Penn Station Tuesday",
                    "$":{  
                      "type":"html"
                    }
                  }
                ],
                "media:credit":[  
                  "Dan Schenker"
                ],
                "media:thumbnail":[  
                  {  
                    "$":{  
                      "url":"http://media.nbcnewyork.com/images/1200*675/lirr+credit+rick+holtman.jpg",
                      "width":"133",
                      "height":"75"
                    }
                  }
                ],
                "photo:thumbnail":[  
                  "http://media.nbcnewyork.com/images/1200*675/lirr+credit+rick+holtman.jpg"
                ]
              }
            ],
            "description":[  
              "Evening rush-hour cancellations and delays on New York's Long Island Rail Road have reached their highest level in 10 years, according to transit data analyzed by the Wall Street Journal. Copyright Associated Press / NBC New YorkPhoto Credit: Rick Holtman"
            ]
          },
          {  
            "dc:creator":[  
              ""
            ],
            "title":[  
              "New Underground Library Offers"
            ],
            "link":[  
              "http://www.nbcnewyork.com/news/linknyc/subway-library-train-e-books-mta-427248663.html"
            ],
            "guid":[  
              "http://www.nbcnewyork.com/news/linknyc/subway-library-train-e-books-mta-427248663.html"
            ],
            "pubDate":[  
              "Thu, 08 Jun 2017 13:32:33 -0400"
            ],
            "category":[  
              "Article"
            ],
            "media:content":[  
              {  
                "$":{  
                  "url":"http://media.nbcnewyork.com/images/subwaycampaignmta.jpg",
                  "medium":"image",
                  "type":"image/jpeg"
                },
                "media:title":[  
                  {  
                    "$":{  
                      "type":"html"
                    }
                  }
                ],
                "media:credit":[  
                  ""
                ],
                "media:thumbnail":[  
                  {  
                    "$":{  
                      "url":"http://media.nbcnewyork.com/images/1200*675/subwaycampaignmta.jpg",
                      "width":"133",
                      "height":"75"
                    }
                  }
                ],
                "photo:thumbnail":[  
                  "http://media.nbcnewyork.com/images/1200*675/subwaycampaignmta.jpg"
                ]
              }
            ],
            "description":[  
              "The New York Public Library and the MTA launched the Subway Library campaign, promoting reading while on the train using MTA's technology.Photo Credit: Jeesu Kim/MTA"
            ]
          },
          {  
            "dc:creator":[  
              ""
            ],
            "title":[  
              "Bandmates Remember Chris Cornell with Empty Spotlight"
            ],
            "link":[  
              "http://www.nbcnewyork.com/news/linknyc/Former-Bandmates-Remember-Chris-Cornell-With-Empty-Spotlight-427243463.html"
            ],
            "guid":[  
              "http://www.nbcnewyork.com/news/linknyc/Former-Bandmates-Remember-Chris-Cornell-With-Empty-Spotlight-427243463.html"
            ],
            "pubDate":[  
              "Thu, 08 Jun 2017 13:11:52 -0400"
            ],
            "category":[  
              "Article"
            ],
            "media:content":[  
              {  
                "$":{  
                  "url":"http://media.nbcnewyork.com/images/GettyImages-631710060-Chris-Cornell.jpg",
                  "medium":"image",
                  "type":"image/jpeg"
                },
                "media:title":[  
                  {  
                    "_":"Some of Chris Cornell's former bandmates have paid tribute to the late singer by performing one of his hits with a spotlight trained on the microphone.",
                    "$":{  
                      "type":"html"
                    }
                  }
                ],
                "media:description":[  
                  {  
                    "_":"Some of Chris Cornell's former bandmates have paid tribute to the late singer by performing one of his hits with a spotlight trained on the microphone.",
                    "$":{  
                      "type":"html"
                    }
                  }
                ],
                "media:credit":[  
                  "Kevork Djansezian/Getty Images for NARAS, File"
                ],
                "media:thumbnail":[  
                  {  
                    "$":{  
                      "url":"http://media.nbcnewyork.com/images/1200*675/GettyImages-631710060-Chris-Cornell.jpg",
                      "width":"133",
                      "height":"75"
                    }
                  }
                ],
                "photo:thumbnail":[  
                  "http://media.nbcnewyork.com/images/1200*675/GettyImages-631710060-Chris-Cornell.jpg"
                ]
              }
            ],
            "description":[  
              "Some of Chris Cornell's former bandmates have paid tribute to the late singer by performing one of his hits with a spotlight trained on the microphone. It happened during the Prophets of Rage show in Berlin... Copyright Associated Press / NBC New YorkPhoto Credit: Kevin Winter/Getty Images"
            ]
          },
          {  
            "dc:creator":[  
              "TOM CANAVAN"
            ],
            "title":[  
              "Giants Safeties Coach Thinks Collins Can Be Even Better"
            ],
            "link":[  
              "http://www.nbcnewyork.com/news/linknyc/New-York-Giants-Safeties-Coach-Thinks-Landon-Collins-Can-Be-Even-Better--427146393.html"
            ],
            "guid":[  
              "http://www.nbcnewyork.com/news/linknyc/New-York-Giants-Safeties-Coach-Thinks-Landon-Collins-Can-Be-Even-Better--427146393.html"
            ],
            "pubDate":[  
              "Thu, 08 Jun 2017 13:12:42 -0400"
            ],
            "category":[  
              "Article"
            ],
            "media:content":[  
              {  
                "$":{  
                  "url":"http://media.nbcnewyork.com/images/GiantsvBengals.jpg",
                  "medium":"image",
                  "type":"image/jpeg"
                },
                "media:title":[  
                  {  
                    "_":"Landon Collins (21)",
                    "$":{  
                      "type":"html"
                    }
                  }
                ],
                "media:description":[  
                  {  
                    "_":"Landon Collins (21)",
                    "$":{  
                      "type":"html"
                    }
                  }
                ],
                "media:credit":[  
                  "The Associated Press/File"
                ],
                "media:thumbnail":[  
                  {  
                    "$":{  
                      "url":"http://media.nbcnewyork.com/images/1200*800/GiantsvBengals.jpg",
                      "width":"133",
                      "height":"75"
                    }
                  }
                ],
                "photo:thumbnail":[  
                  "http://media.nbcnewyork.com/images/1200*800/GiantsvBengals.jpg"
                ]
              }
            ],
            "description":[  
              "During a breakout season in 2016, New York Giants safety Landon Collins went from one of the NFL's most promising young defensive players to one of its best overall, an All-Pro. Copyright Associated Press / NBC New YorkPhoto Credit: Getty Images/File"
            ]
          }
        ]
      }
    ]
  }
},
  weather: {  
    "rss":{  
      "$":{  
        "xmlns:atom":"http://www.w3.org/2005/Atom",
        "xmlns:content":"http://purl.org/rss/1.0/modules/content/",
        "version":"2.0",
        "xmlns:media":"http://search.yahoo.com/mrss/"
      },
      "channel":[  
      {  
        "title":[  
        "New York, NY"
        ],
        "link":[  
        "http://www.nbcnewyork.com/weather"
        ],
        "atom:link":[  
        {  
          "$":{  
            "href":"http://www.nbcnewyork.com/weather",
            "rel":"self"
          }
        }
        ],
        "language":[  
        "en-us"
        ],
        "lastBuildDate":[  
        "Tue, 13 Jun 2017 14:33:20 -0700"
        ],
        "item":[  
        {  
          "title":[  
          "100F"
          ],
          "iconCode":[  
          "66"
          ],
          "media:content":[  
          {  
            "$":{  
              "url":"http://media.nbcnewyork.com/designimages/new_wx_66.png",
              "medium":"image",
              "type":"image/jpeg"
            }
          }
          ],
          "description":[  
          "Details: Broken Clouds, Feels like 101F, Humidity: 27, Precipitation: 0, Wind: 14mph"
          ]
        },
        {  
          "title":[  
          "Today: Currently 100F, High 97F, Low 73F, Broken Clouds"
          ],
          "iconCode":[  
          "69"
          ],
          "media:content":[  
          {  
            "$":{  
              "url":"http://media.nbcnewyork.com/designimages/new_wx_69.png",
              "medium":"image",
              "type":"image/jpeg"
            }
          }
          ],
          "description":[  
          "Details: Mostly Cloudy, High 97F, Low 73F, Humidity: 56, Precipitation: 20, Wind: 15mph"
          ]
        },
        {  
          "title":[  
          "Wednesday: High 81F, Low 62F, Partly Cloudy"
          ],
          "iconCode":[  
          "66"
          ],
          "media:content":[  
          {  
            "$":{  
              "url":"http://media.nbcnewyork.com/designimages/new_wx_66.png",
              "medium":"image",
              "type":"image/jpeg"
            }
          }
          ],
          "description":[  
          "Details: Partly Cloudy, High 81F, Low 62F, Humidity: 41, Precipitation: 0, Wind: 11mph"
          ]
        },
        {  
          "title":[  
          "Thursday: High 75F, Low 62F, Mostly Sunny"
          ],
          "iconCode":[  
          "65"
          ],
          "media:content":[  
          {  
            "$":{  
              "url":"http://media.nbcnewyork.com/designimages/new_wx_65.png",
              "medium":"image",
              "type":"image/jpeg"
            }
          }
          ],
          "description":[  
          "Details: Mostly Sunny, High 75F, Low 62F, Humidity: 41, Precipitation: 0, Wind: 11mph"
          ]
        },
        {  
          "title":[  
          "Friday: High 71F, Low 67F, PM Showers"
          ],
          "iconCode":[  
          "87"
          ],
          "media:content":[  
          {  
            "$":{  
              "url":"http://media.nbcnewyork.com/designimages/new_wx_87.png",
              "medium":"image",
              "type":"image/jpeg"
            }
          }
          ],
          "description":[  
          "Details: PM Showers, High 71F, Low 67F, Humidity: 69, Precipitation: 50, Wind: 11mph"
          ]
        },
        {  
          "title":[  
          "Saturday: High 77F, Low 71F, Cloudy"
          ],
          "iconCode":[  
          "67"
          ],
          "media:content":[  
          {  
            "$":{  
              "url":"http://media.nbcnewyork.com/designimages/new_wx_67.png",
              "medium":"image",
              "type":"image/jpeg"
            }
          }
          ],
          "description":[  
          "Details: Cloudy, High 77F, Low 71F, Humidity: 73, Precipitation: 20, Wind: 11mph"
          ]
        }
        ]
      }
      ]
    }
  }
}];

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
    if (this.rows === null || this.rows.length === 0) {
      return;
    }
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
    }else{
      this.placeholder.hide();

      this.storyDiv.style.backgroundImage= `url(${this.rows[0].news.rss.channel[0].item[this.index]['media:content'][0].$.url}`
      this.storyHeader.innerText = this.rows[0].news.rss.channel[0].item[this.index].title;

      this.updateIndex();
    }

    Logger.log(`The view has ${this.rows.length} data rows.`);
  }
}

module.exports = View;
