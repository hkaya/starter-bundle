/**
 * Test Data
 *
 * Make sure this duplicates the strucutre and data in Silo
 * so your testing environments mimic production.
 *
 */

const TEST_DATA = [{
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

module.exports = TEST_DATA;
