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
					"Evening rush-hour cancellations and delays on New York's Long Island Rail Road have reached their highest level in 10 years, according to transit data analyzed by the Wall Street Journal. Copyright Associated Press / NBC New York Photo Credit: Rick Holtman"
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
					"The New York Public Library and the MTA launched the Subway Library campaign, promoting reading while on the train using MTA's technology. Photo Credit: Jeesu Kim/MTA"
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
					"Some of Chris Cornell's former bandmates have paid tribute to the late singer by performing one of his hits with a spotlight trained on the microphone. It happened during the Prophets of Rage show in Berlin... Copyright Associated Press / NBC New York Photo Credit: Kevin Winter/Getty Images"
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
					"During a breakout season in 2016, New York Giants safety Landon Collins went from one of the NFL's most promising young defensive players to one of its best overall, an All-Pro. Copyright Associated Press / NBC New York Photo Credit: Getty Images/File"
					]
				}
				]
			}
			]
		}
	},
	weather: {
	"rss": {
		"$": {
			"version": "2.0",
			"xmlns:media": "http://search.yahoo.com/mrss/",
			"xmlns:atom": "http://www.w3.org/2005/Atom",
			"xmlns:content": "http://purl.org/rss/1.0/modules/content/"
		},
		"channel": [{
			"atom:link": [{
				"$": {
					"rel": "self",
					"href": "http://www.nbcnewyork.com/weather"
				}
			}],
			"title": ["New York, NY"],
			"language": ["en-us"],
			"lastBuildDate": ["Fri, 23 Jun 2017 13:39:20 -0700"],
			"link": ["http://www.nbcnewyork.com/weather"],
			"item": [{
				"iconCode": ["66"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_66.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"description": ["Details: Broken Clouds, Feels like 90F, Humidity: 67, Precipitation: 0, Wind: 17mph"],
				"title": ["84F"]
			}, {
				"iconCode": ["67"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_67.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"description": ["Details: Cloudy, Humidity: 66, Precipitation: 20, Wind: 17mph"],
				"title": ["5 PM: Temp 84F, Cloudy"]
			}, {
				"iconCode": ["96"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_96.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"description": ["Details: Scattered Thunderstorms, Humidity: 67, Precipitation: 40, Wind: 15mph"],
				"title": ["6 PM: Temp 83F, Scattered Thunderstorms"]
			}, {
				"iconCode": ["95"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_95.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"description": ["Details: Isolated Thunderstorms, Humidity: 75, Precipitation: 30, Wind: 14mph"],
				"title": ["7 PM: Temp 80F, Isolated Thunderstorms"]
			}, {
				"iconCode": ["95"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_95.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"description": ["Details: Isolated Thunderstorms, Humidity: 76, Precipitation: 30, Wind: 13mph"],
				"title": ["8 PM: Temp 79F, Isolated Thunderstorms"]
			}, {
				"iconCode": ["101"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_101.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"description": ["Details: Scattered Thunderstorms, Humidity: 67, Precipitation: 50, Wind: 13mph"],
				"title": ["9 PM: Temp 83F, Scattered Thunderstorms"]
			}, {
				"iconCode": ["101"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_101.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"description": ["Details: Scattered Thunderstorms, Humidity: 66, Precipitation: 50, Wind: 13mph"],
				"title": ["10 PM: Temp 82F, Scattered Thunderstorms"]
			}, {
				"iconCode": ["101"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_101.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"description": ["Details: Scattered Thunderstorms, Humidity: 70, Precipitation: 50, Wind: 15mph"],
				"title": ["11 PM: Temp 80F, Scattered Thunderstorms"]
			}, {
				"iconCode": ["101"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_101.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"description": ["Details: Scattered Thunderstorms, Humidity: 71, Precipitation: 40, Wind: 13mph"],
				"title": ["12 AM: Temp 80F, Scattered Thunderstorms"]
			}, {
				"iconCode": ["101"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_101.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"description": ["Details: Scattered Thunderstorms, Humidity: 74, Precipitation: 60, Wind: 11mph"],
				"title": ["1 AM: Temp 78F, Scattered Thunderstorms"]
			}, {
				"iconCode": ["116"],
				"media:content": [{
					"$": {
						"url": "http://media.nbcnewyork.com/designimages/new_wx_116.png",
						"medium": "image",
						"type": "image/jpeg"
					}
				}],
				"description": ["Details: Thunderstorms, Humidity: 77, Precipitation: 60, Wind: 11mph"],
				"title": ["2 AM: Temp 77F, Thunderstorms"]
			}]
		}]
	}
}
}];

module.exports = TEST_DATA;
