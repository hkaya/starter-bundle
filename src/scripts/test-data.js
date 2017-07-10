/**
 * Test Data
 *
 * Make sure this duplicates the strucutre and data in Silo
 * so your testing environments mimic production.
 *
 */

const TEST_DATA = [{
	"_update_date": "Jun 14th, 2017 10:51 am",
	"_device_id": "*",
	"_index": "nyc",
	"news": {  
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
				"Tue, 13 Jun 2017 12:10:20 -0400"
				],
				"lastBuildDate":[  
				"Tue, 13 Jun 2017 12:10:20 -0400"
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
					"Long Island Rail Road Delays Are Worst in 10 Years: Report"
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
					"Evening rush-hour cancellations and delays on New Yorks Long Island Rail Road have reached their highest level in 10 years, according to transit data analyzed by the Wall Street Journal. Copyright Associated Press / NBC New York Photo Credit: Rick Holtman"
					]
				},
				{  
					"dc:creator":[  
					""
					],
					"title":[  
					"New Underground Library Offers You Free Books for Commute"
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
					"The New York Public Library and the MTA launched the Subway Library campaign, promoting reading while on the train using MTAs technology. Photo Credit: Jeesu Kim/MTA"
					]
				},
				{  
					"dc:creator":[  
					""
					],
					"title":[  
					"Former Bandmates Remember Chris Cornell with Empty Spotlight"
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
							"_":"Some of Chris Cornells former bandmates have paid tribute to the late singer by performing one of his hits with a spotlight trained on the microphone.",
							"$":{  
								"type":"html"
							}
						}
						],
						"media:description":[  
						{  
							"_":"Some of Chris Cornells former bandmates have paid tribute to the late singer by performing one of his hits with a spotlight trained on the microphone.",
							"$":{  
								"type":"html"
							}
						}
						],
						"media:credit":[  
						"Jordan Strauss/Invision/AP"
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
					"Some of Chris Cornells former bandmates have paid tribute to the late singer by performing one of his hits with a spotlight trained on the microphone. It happened during the Prophets of Rage show in Berlin... Copyright Associated Press / NBC New York Photo Credit: Kevin Winter/Getty Images"
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
					"During a breakout season in 2016, New York Giants safety Landon Collins went from one of the NFLs most promising young defensive players to one of its best overall, an All-Pro. Copyright Associated Press / NBC New York Photo Credit: Getty Images/File"
					]
				}
				]
			}
			]
		}
	},
	"weather": {
	"rss": {
		"$": {
			"xmlns:atom": "http://www.w3.org/2005/Atom",
			"version": "2.0",
			"xmlns:content": "http://purl.org/rss/1.0/modules/content/",
			"xmlns:media": "http://search.yahoo.com/mrss/"
		},
		"channel": [{
			"item": [{
				"iconCode": ["66"],
				"description": ["Details: Scattered Clouds, Feels like 76F, Humidity: 37, Precipitation: 0, Wind: 12mph"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_75.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"title": ["85F"]
			}, {
				"iconCode": ["66"],
				"description": ["Details: Partly Cloudy, Humidity: 36, Precipitation: 20, Wind: 12mph"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_66.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"title": ["1  PM: Temp 78F, Partly Cloudy"]
			}, {
				"iconCode": ["66"],
				"description": ["Details: Partly Cloudy, Humidity: 35, Precipitation: 20, Wind: 12mph"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_66.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"title": ["2  PM: Temp 78F, Partly Cloudy"]
			}, {
				"iconCode": ["66"],
				"description": ["Details: Partly Cloudy, Humidity: 37, Precipitation: 20, Wind: 13mph"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_66.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"title": ["3  PM: Temp 78F, Partly Cloudy"]
			}, {
				"iconCode": ["66"],
				"description": ["Details: Partly Cloudy, Humidity: 39, Precipitation: 20, Wind: 14mph"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_66.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"title": ["4  PM: Temp 77F, Partly Cloudy"]
			}, {
				"iconCode": ["66"],
				"description": ["Details: Partly Cloudy, Humidity: 40, Precipitation: 20, Wind: 15mph"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_66.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"title": ["5  PM: Temp 76F, Partly Cloudy"]
			}, {
				"iconCode": ["66"],
				"description": ["Details: Partly Cloudy, Humidity: 43, Precipitation: 20, Wind: 14mph"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_66.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"title": ["6  PM: Temp 75F, Partly Cloudy"]
			}, {
				"iconCode": ["85"],
				"description": ["Details: Sunny, Humidity: 42, Precipitation: 0, Wind: 13mph"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_85.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"title": ["7  PM: Temp 76F, Sunny"]
			}, {
				"iconCode": ["85"],
				"description": ["Details: Sunny, Humidity: 48, Precipitation: 0, Wind: 10mph"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_85.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"title": ["8  PM: Temp 74F, Sunny"]
			}, {
				"iconCode": ["97"],
				"description": ["Details: Clear, Humidity: 53, Precipitation: 0, Wind: 8mph"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_97.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"title": ["9  PM: Temp 73F, Clear"]
			}, {
				"iconCode": ["97"],
				"description": ["Details: Clear, Humidity: 53, Precipitation: 0, Wind: 6mph"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_97.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"title": ["10 PM: Temp 73F, Clear"]
			}],
			"link": ["http://www.nbcnewyork.com/weather"],
			"language": ["en-us"],
			"atom:link": [{
				"$": {
					"rel": "self",
					"href": "http://www.nbcnewyork.com/weather"
				}
			}],
			"lastBuildDate": ["Mon, 26 Jun 2017 09:38:20 -0700"],
			"title": ["New York, NY"]
		}]
	}
}
}];

module.exports = TEST_DATA;
