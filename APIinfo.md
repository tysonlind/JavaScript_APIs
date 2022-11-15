// GIPHY API Key bKU6BUVB00GBtKZxYXBWGSiQOI0hQBbP


//giphy request string example
//https://api.giphy.com/v1/gifs/search?api_key=bKU6BUVB00GBtKZxYXBWGSiQOI0hQBbP&q=dogs&limit=25&offset=0&rating=g&lang=en
// q= the search word next
// limit= how many results to return
// offset = if you want to offset which results you get like skip first 5
// rating = g, pg, pg-13, r (input parameters)
// lang = 2 digit codes, (en for english)

/* typical response

{
  "data": [
    {
      "type": "gif",
      "id": "ClmhNK8R9M4RUkcSxV",
      "url": "https://giphy.com/gifs/bestfriends-i-love-you-valentines-day-best-friends-animal-society-ClmhNK8R9M4RUkcSxV",
      "slug": "bestfriends-i-love-you-valentines-day-best-friends-animal-society-ClmhNK8R9M4RUkcSxV",
      "bitly_gif_url": "https://gph.is/g/E0v7wbp",
      "bitly_url": "https://gph.is/g/E0v7wbp",
      "embed_url": "https://giphy.com/embed/ClmhNK8R9M4RUkcSxV",
      "username": "bestfriends",
      "source": "http://www.bestfriends.org",
      "title": "Save Them All I Love You GIF by Best Friends Animal Society",
      "rating": "g",
      "content_url": "",
      "source_tld": "www.bestfriends.org",
      "source_post_url": "http://www.bestfriends.org",
      "is_sticker": 0,
      "import_datetime": "2022-02-07 14:39:16",
      "trending_datetime": "0000-00-00 00:00:00",
      "images": {
        "original": {
          "height": "413",
          "width": "480",
          "size": "369061",
          "url": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/giphy.gif?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=giphy.gif&ct=g",
          "mp4_size": "258293",
          "mp4": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/giphy.mp4?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=giphy.mp4&ct=g",
          "webp_size": "124252",
          "webp": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/giphy.webp?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=giphy.webp&ct=g",
          "frames": "5",
          "hash": "fedbfe11bdac9adfd33b698ffb6d657a"
        },
        "downsized": {
          "height": "413",
          "width": "480",
          "size": "369061",
          "url": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/giphy.gif?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=giphy.gif&ct=g"
        },
        "downsized_large": {
          "height": "413",
          "width": "480",
          "size": "369061",
          "url": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/giphy.gif?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=giphy.gif&ct=g"
        },
        "downsized_medium": {
          "height": "413",
          "width": "480",
          "size": "369061",
          "url": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/giphy.gif?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=giphy.gif&ct=g"
        },
        "downsized_small": {
          "height": "364",
          "width": "424",
          "mp4_size": "107168",
          "mp4": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/giphy-downsized-small.mp4?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=giphy-downsized-small.mp4&ct=g"
        },
        "downsized_still": {
          "height": "413",
          "width": "480",
          "size": "369061",
          "url": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/giphy_s.gif?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=giphy_s.gif&ct=g"
        },
        "fixed_height": {
          "height": "200",
          "width": "232",
          "size": "76504",
          "url": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/200.gif?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=200.gif&ct=g",
          "mp4_size": "68160",
          "mp4": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/200.mp4?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=200.mp4&ct=g",
          "webp_size": "38960",
          "webp": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/200.webp?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=200.webp&ct=g"
        },
        "fixed_height_downsampled": {
          "height": "200",
          "width": "232",
          "size": "76504",
          "url": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/200_d.gif?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=200_d.gif&ct=g",
          "webp_size": "48070",
          "webp": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/200_d.webp?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=200_d.webp&ct=g"
        },
        "fixed_height_small": {
          "height": "100",
          "width": "116",
          "size": "26789",
          "url": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/100.gif?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=100.gif&ct=g",
          "mp4_size": "23798",
          "mp4": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/100.mp4?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=100.mp4&ct=g",
          "webp_size": "14750",
          "webp": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/100.webp?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=100.webp&ct=g"
        },
        "fixed_height_small_still": {
          "height": "100",
          "width": "116",
          "size": "6427",
          "url": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/100_s.gif?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=100_s.gif&ct=g"
        },
        "fixed_height_still": {
          "height": "200",
          "width": "232",
          "size": "16934",
          "url": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/200_s.gif?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=200_s.gif&ct=g"
        },
        "fixed_width": {
          "height": "172",
          "width": "200",
          "size": "60729",
          "url": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/200w.gif?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=200w.gif&ct=g",
          "mp4_size": "52293",
          "mp4": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/200w.mp4?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=200w.mp4&ct=g",
          "webp_size": "31286",
          "webp": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/200w.webp?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=200w.webp&ct=g"
        },
        "fixed_width_downsampled": {
          "height": "172",
          "width": "200",
          "size": "60729",
          "url": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/200w_d.gif?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=200w_d.gif&ct=g",
          "webp_size": "37494",
          "webp": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/200w_d.webp?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=200w_d.webp&ct=g"
        },
        "fixed_width_small": {
          "height": "86",
          "width": "100",
          "size": "20846",
          "url": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/100w.gif?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=100w.gif&ct=g",
          "mp4_size": "18987",
          "mp4": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/100w.mp4?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=100w.mp4&ct=g",
          "webp_size": "12074",
          "webp": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/100w.webp?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=100w.webp&ct=g"
        },
        "fixed_width_small_still": {
          "height": "86",
          "width": "100",
          "size": "5235",
          "url": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/100w_s.gif?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=100w_s.gif&ct=g"
        },
        "fixed_width_still": {
          "height": "172",
          "width": "200",
          "size": "13918",
          "url": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/200w_s.gif?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=200w_s.gif&ct=g"
        },
        "looping": {
          "mp4_size": "1183525",
          "mp4": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/giphy-loop.mp4?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=giphy-loop.mp4&ct=g"
        },
        "original_still": {
          "height": "413",
          "width": "480",
          "size": "110702",
          "url": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/giphy_s.gif?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=giphy_s.gif&ct=g"
        },
        "original_mp4": {
          "height": "412",
          "width": "480",
          "mp4_size": "258293",
          "mp4": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/giphy.mp4?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=giphy.mp4&ct=g"
        },
        "preview": {
          "height": "216",
          "width": "251",
          "mp4_size": "43713",
          "mp4": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/giphy-preview.mp4?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=giphy-preview.mp4&ct=g"
        },
        "preview_gif": {
          "height": "108",
          "width": "126",
          "size": "48914",
          "url": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/giphy-preview.gif?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=giphy-preview.gif&ct=g"
        },
        "preview_webp": {
          "height": "413",
          "width": "480",
          "size": "25078",
          "url": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/giphy-preview.webp?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=giphy-preview.webp&ct=g"
        },
        "480w_still": {
          "height": "413",
          "width": "480",
          "size": "369061",
          "url": "https://media0.giphy.com/media/ClmhNK8R9M4RUkcSxV/480w_s.jpg?cid=322cfd56lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr&rid=480w_s.jpg&ct=g"
        }
      },
      "user": {
        "avatar_url": "https://media4.giphy.com/avatars/bestfriends/4Ja63d50vmML.gif",
        "banner_image": "https://media4.giphy.com/headers/bestfriends/4hNDBzWNX3fb.jpg",
        "banner_url": "https://media4.giphy.com/headers/bestfriends/4hNDBzWNX3fb.jpg",
        "profile_url": "https://giphy.com/bestfriends/",
        "username": "bestfriends",
        "display_name": "Best Friends Animal Society",
        "description": "Best Friends Animal Society is a leading national animal welfare organization dedicated to ending the killing of dogs and cats in America's shelters. In addition to running lifesaving programs in partnership with more than 2,700 animal welfare groups across the country, Best Friends has regional centers in New York City, Los Angeles, Atlanta and Salt Lake City, and operates the nation's largest no-kill sanctuary for companion animals. Founded in 1984, Best Friends is a pioneer in the no-kill movement and has helped reduce the number of animals killed in shelters nationwide from an estimated 17 million per year to around 733,000. That means there are still about 2,000 dogs and cats killed every day in shelters, just because they don’t have safe places to call home. We are determined to bring the country to no-kill by the year 2025. Working collaboratively with shelters, rescue groups, other organizations and you, we will end the killing and Save Them All. To check out our community lifesaving dashboard and for more information, visit bestfriends.org.",
        "instagram_url": "https://instagram.com/bestfriendsanimalsociety",
        "website_url": "http://www.bestfriends.org/",
        "is_verified": true
      },
      "analytics_response_payload": "e=Z2lmX2lkPUNsbWhOSzhSOU00UlVrY1N4ViZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTMyMmNmZDU2bHFvMzBmYWJ0NXFvMzU2aTFnM3duMjlha2g4dzRhY3RnMmE5Ymp5ciZjdD1n",
      "analytics": {
        "onload": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUNsbWhOSzhSOU00UlVrY1N4ViZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTMyMmNmZDU2bHFvMzBmYWJ0NXFvMzU2aTFnM3duMjlha2g4dzRhY3RnMmE5Ymp5ciZjdD1n&action_type=SEEN"
        },
        "onclick": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUNsbWhOSzhSOU00UlVrY1N4ViZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTMyMmNmZDU2bHFvMzBmYWJ0NXFvMzU2aTFnM3duMjlha2g4dzRhY3RnMmE5Ymp5ciZjdD1n&action_type=CLICK"
        },
        "onsent": {
          "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPUNsbWhOSzhSOU00UlVrY1N4ViZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTMyMmNmZDU2bHFvMzBmYWJ0NXFvMzU2aTFnM3duMjlha2g4dzRhY3RnMmE5Ymp5ciZjdD1n&action_type=SENT"
        }
      }
    }
  ],
  "pagination": {
    "total_count": 12462,
    "count": 1,
    "offset": 0
  },
  "meta": {
    "status": 200,
    "msg": "OK",
    "response_id": "lqo30fabt5qo356i1g3wn29akh8w4actg2a9bjyr"
  }
}

*/