export default {
  "settings": {
    "environment": "dev",
    "STORAGE_TTL": "86400",
    "api": {
      "meetingFinderURL": "https://meetingfinder.weightwatchers.com",
      "emailCaptureURL": "https://cmx.qat2.weightwatchers.com/api/v1/vendor/emailCapture",
      "apiURL": "https://api.qat2.weightwatchers.com",
      "cmxMarket": "en-us"
    },
    "geo": {
      "IP_LOOKUP_API_URL": "https://api.ipify.org?format=json",
      "locate_method_order": [
        "zip",
        "position"
      ]
    },
    "localization": {
      "unit_of_measure": "miles",
      "address_format_js": "<%- location.Address.City %>, <%- location.Address.State %> <%- location.Address.ZipCode %>",
      "address_format_tpl": [
        "City",
        ",",
        "State",
        "ZipCode"
      ],
      "decimal_separator": ".",
      "thousands_separator": ",",
      "time_format": "g:i A",
      "time_format_24_hr": false,
      "first_day_of_week": 0,
      "currency": {
        "symbol": "$",
        "direction": "ltr"
      },
      "zipcode_regex": "\\d{5}([ \\-]\\d{4})?",
      "show_full_leader_names": false,
      "country_code": "us",
      "language_code": "en",
      "base_path": "/us/"
    },
    "personalization": {
      "entitlement_prefix": "PL"
    },
    "wwvs_price": {
      "constants": {
        "non_dynamic_type": 0,
        "dynamic_type": 1,
        "promo_type": 2
      },
      "productsOnPage": {
        "2dc9d38bc29d2a506d5e206c4912d9c0": {
          "default_price": "666",
          "pricing_text": "&lt;p class=&quot;typog--default-paragraph&quot;&gt;   &lt;span class=&quot;typog--eyebrow&quot;&gt;As low as [price:token]/Week*&lt;/span&gt;&lt;br /&gt; &lt;span&gt;(*3month plan)&amp;nbsp;&lt;br /&gt;    &lt;br /&gt;    Total Access gives you complete personalized support to help you achieve all your wellness goals. Talk to a caring Coach anytime with unlimited phone sessions, and attend weekly meetings that encourage you stay on track. You'll also have access to all the benefits of&amp;nbsp;OnlinePlus.&amp;nbsp;&lt;/span&gt;&lt;/p&gt;&lt;p class=&quot;typog--default-paragraph&quot;&gt;   &lt;span&gt;This is truly our most personalized plan.&lt;/span&gt;&lt;/p&gt;",
          "product_id": null,
          "promo_offer_id": null,
          "type": "0",
          "duration": {
            "week": true
          },
          "error_text": "Unable to update price.",
          "change_error_text": "Click here to try again.",
          "zip_text": "Price shown is for",
          "change_text": "Click here to change location.",
          "border_message": "Choose a meeting location and sign up today.",
          "zip_error_text": "Please enter a valid zip code.",
          "sign_up_link_default_url": {
            "url": "https://www.weightwatchers.com/us/checkout/?channelId=1&sponsorId=1&promotionId=1",
            "external": true
          },
          "default_url_external": null,
          "sign_up_link_csp_url": "https://www.weightwatchers.com/us/checkout/?",
          "sign_up_link_text": "Continue with OnlinePlus",
          "sign_up_link_show": true,
          "isMobile": false
        },
        "22d9cf227bf6a34116fdb40fa32e2632": {
          "default_price": "666",
          "pricing_text": "&lt;p class=&quot;typog--default-paragraph&quot;&gt;   &lt;span class=&quot;typog--eyebrow&quot;&gt;As low as [price:token]/Week*&lt;/span&gt;&lt;br /&gt; &lt;span&gt;(*3month plan)&amp;nbsp;&lt;br /&gt;    &lt;br /&gt;    Total Access gives you complete personalized support to help you achieve all your wellness goals. Talk to a caring Coach anytime with unlimited phone sessions, and attend weekly meetings that encourage you stay on track. You'll also have access to all the benefits of&amp;nbsp;OnlinePlus.&amp;nbsp;&lt;/span&gt;&lt;/p&gt;&lt;p class=&quot;typog--default-paragraph&quot;&gt;   &lt;span&gt;This is truly our most personalized plan.&lt;/span&gt;&lt;/p&gt;",
          "product_id": "2",
          "promo_offer_id": null,
          "type": "1",
          "duration": {
            "week": true
          },
          "error_text": "Unable to update price",
          "change_error_text": "Try again",
          "zip_text": "Price for",
          "change_text": "Change location",
          "border_message": "Choose a meeting location",
          "zip_error_text": "Please enter a valid zip code.",
          "sign_up_link_default_url": {
            "url": "https://www.weightwatchers.com/us/checkout/?channelId=1&sponsorId=1&promotionId=1",
            "external": true
          },
          "default_url_external": false,
          "sign_up_link_csp_url": "https://www.weightwatchers.com/us/checkout?",
          "sign_up_link_text": "Continue with Meetings ",
          "sign_up_link_show": true,
          "isMobile": false
        },
        "2a96c74aef0f4ae37aaf121524fb0ba3": {
          "default_price": "666",
          "pricing_text": "&lt;p class=&quot;typog--default-paragraph&quot;&gt;   &lt;span class=&quot;typog--eyebrow&quot;&gt;As low as [price:token]/Week*&lt;/span&gt;&lt;br /&gt; &lt;span&gt;(*3month plan)&amp;nbsp;&lt;br /&gt;    &lt;br /&gt;    Total Access gives you complete personalized support to help you achieve all your wellness goals. Talk to a caring Coach anytime with unlimited phone sessions, and attend weekly meetings that encourage you stay on track. You'll also have access to all the benefits of&amp;nbsp;OnlinePlus.&amp;nbsp;&lt;/span&gt;&lt;/p&gt;&lt;p class=&quot;typog--default-paragraph&quot;&gt;   &lt;span&gt;This is truly our most personalized plan.&lt;/span&gt;&lt;/p&gt;",
          "product_id": "1",
          "promo_offer_id": "11",
          "type": "2",
          "duration": {
            "week": true
          },
          "error_text": "Unable to update price.",
          "change_error_text": "Click here to try again.",
          "zip_text": "Price shown is for",
          "change_text": "Change location.",
          "border_message": "Choose a meeting location and sign up today.",
          "zip_error_text": "Please enter a valid zip code.",
          "sign_up_link_default_url": {
            "url": "https://www.weightwatchers.com/us/checkout/?channelId=1&sponsorId=1&promotionId=1",
            "external": true
          },
          "default_url_external": true,
          "sign_up_link_csp_url": "https://www.weightwatchers.com/us/checkout/?",
          "sign_up_link_text": "Continue with Coaching",
          "sign_up_link_show": true,
          "isMobile": false
        },
        "30a8f8574dcffebd5872ea3084b43a9c": {
          "default_price": "666",
          "pricing_text": "&lt;p class=&quot;typog--default-paragraph&quot;&gt;   &lt;span class=&quot;typog--eyebrow&quot;&gt;As low as [price:token]/Week*&lt;/span&gt;&lt;br /&gt; &lt;span&gt;(*3month plan)&amp;nbsp;&lt;br /&gt;    &lt;br /&gt;    Total Access gives you complete personalized support to help you achieve all your wellness goals. Talk to a caring Coach anytime with unlimited phone sessions, and attend weekly meetings that encourage you stay on track. You'll also have access to all the benefits of&amp;nbsp;OnlinePlus.&amp;nbsp;&lt;/span&gt;&lt;/p&gt;&lt;p class=&quot;typog--default-paragraph&quot;&gt;   &lt;span&gt;This is truly our most personalized plan.&lt;/span&gt;&lt;/p&gt;",
          "product_id": "2",
          "promo_offer_id": null,
          "type": "1",
          "duration": {
            "week": true
          },
          "error_text": "Unable to update price",
          "change_error_text": "Try again",
          "zip_text": "Price for",
          "change_text": "Change location",
          "border_message": "Choose a meeting location",
          "zip_error_text": "Please enter a valid zip code. VERIFY THIS IS DIFFERENT.",
          "sign_up_link_default_url": {
            "url": "https://www.weightwatchers.com/us/checkout/?channelId=1&sponsorId=1&promotionId=1",
            "external": true
          },
          "default_url_external": false,
          "sign_up_link_csp_url": "www.weightwatchers.com/us/checkout?",
          "sign_up_link_text": "Continue with Meetings",
          "sign_up_link_show": true,
          "isMobile": false
        },
        "188251d9c2feafe335bcd1ec520b8647": {
          "default_price": "666",
          "pricing_text": "&lt;p class=&quot;typog--default-paragraph&quot;&gt;   &lt;span class=&quot;typog--eyebrow&quot;&gt;As low as [price:token]/Week*&lt;/span&gt;&lt;br /&gt; &lt;span&gt;(*3month plan)&amp;nbsp;&lt;br /&gt;    &lt;br /&gt;    Total Access gives you complete personalized support to help you achieve all your wellness goals. Talk to a caring Coach anytime with unlimited phone sessions, and attend weekly meetings that encourage you stay on track. You'll also have access to all the benefits of&amp;nbsp;OnlinePlus.&amp;nbsp;&lt;/span&gt;&lt;/p&gt;&lt;p class=&quot;typog--default-paragraph&quot;&gt;   &lt;span&gt;This is truly our most personalized plan.&lt;/span&gt;&lt;/p&gt;",
          "product_id": "1",
          "promo_offer_id": "26",
          "type": "2",
          "duration": {
            "week": true
          },
          "error_text": "Unable to update price.",
          "change_error_text": "Click here to try again.",
          "zip_text": "Price shown is for",
          "change_text": "Click here to change location.",
          "border_message": "Choose a meeting location and sign up today.",
          "zip_error_text": "Please enter a valid zip code.",
          "sign_up_link_default_url": {
            "url": "https://www.weightwatchers.com/us/checkout/?channelId=1&sponsorId=1&promotionId=1",
            "external": true
          },
          "default_url_external": true,
          "sign_up_link_csp_url": "https://www.weightwatchers.com/us/checkout/?",
          "sign_up_link_text": "Sign up",
          "sign_up_link_show": true,
          "isMobile": false
        },
        "0c8493729a27a146267aa0310f9a25ac": {
          "default_price": "666",
          "pricing_text": "&lt;p class=&quot;typog--default-paragraph&quot;&gt;   &lt;span class=&quot;typog--eyebrow&quot;&gt;As low as [price:token]/Week*&lt;/span&gt;&lt;br /&gt; &lt;span&gt;(*3month plan)&amp;nbsp;&lt;br /&gt;    &lt;br /&gt;    Total Access gives you complete personalized support to help you achieve all your wellness goals. Talk to a caring Coach anytime with unlimited phone sessions, and attend weekly meetings that encourage you stay on track. You'll also have access to all the benefits of&amp;nbsp;OnlinePlus.&amp;nbsp;&lt;/span&gt;&lt;/p&gt;&lt;p class=&quot;typog--default-paragraph&quot;&gt;   &lt;span&gt;This is truly our most personalized plan.&lt;/span&gt;&lt;/p&gt;",
          "product_id": "2",
          "promo_offer_id": null,
          "type": "1",
          "duration": {
            "month": true
          },
          "error_text": "Unable to update price.",
          "change_error_text": "Click here to try again.",
          "zip_text": "Price shown is for",
          "change_text": "Click here to change location.",
          "border_message": "Choose a meeting location and sign up today.",
          "zip_error_text": "Please enter a valid zip code.",
          "sign_up_link_default_url": {
            "url": "https://www.weightwatchers.com/us/checkout/?channelId=1&sponsorId=1&promotionId=1",
            "external": true
          },
          "default_url_external": true,
          "sign_up_link_csp_url": "https://www.weightwatchers.com/us/checkout/?",
          "sign_up_link_text": "Sign Up",
          "sign_up_link_show": true,
          "isMobile": false
        },
        "onlineplus": {
          "default_price": "3.07",
          "pricing_text": "[price:token]/week nondyn",
          "product_id": null,
          "promo_offer_id": null,
          "type": "0",
          "duration": {
            "week": true
          },
          "error_text": "Unable to update price.",
          "change_error_text": "Click here to try again.",
          "zip_text": "Price shown is for",
          "change_text": "Change Zip.",
          "border_message": "Choose a meeting location and sign up today.",
          "zip_error_text": "Please enter a valid zip code.",
          "sign_up_link_default_url": {
            "url": "https://www.weightwatchers.com/us/checkout/?channelId=1&sponsorId=1&promotionId=1",
            "external": true
          },
          "default_url_external": true,
          "sign_up_link_csp_url": "https://www.weightwatchers.com/us/checkout/?",
          "sign_up_link_text": "Continue with OnlinePlus",
          "sign_up_link_text_mobile": "Continue",
          "sign_up_link_show": true,
          "isMobile": true
        },
        "meetings": {
          "default_price": "666",
          "pricing_text": "[price:token]/week dyn",
          "product_id": "2",
          "promo_offer_id": null,
          "type": "1",
          "duration": {
            "week": true
          },
          "error_text": "Unable to update price.",
          "change_error_text": "Click here to try again.",
          "zip_text": "Price shown is for",
          "change_text": "Click here to change location.",
          "border_message": "Choose a meeting location and sign up today.",
          "zip_error_text": "Please enter a valid zip code.",
          "sign_up_link_default_url": {
            "url": "https://www.weightwatchers.com/us/checkout/?channelId=1&sponsorId=1&promotionId=1",
            "external": true
          },
          "default_url_external": true,
          "sign_up_link_csp_url": "https://www.weightwatchers.com/us/checkout/?",
          "sign_up_link_text": "Continue with Meetings",
          "sign_up_link_show": true,
          "sign_up_link_text_mobile": "Continue",
          "isMobile": true
        },
        "coaching": {
          "default_price": "666",
          "pricing_text": "[price:token]/week promo",
          "product_id": "6",
          "promo_offer_id": "11",
          "type": "2",
          "duration": {
            "week": true
          },
          "error_text": "Unable to update price.",
          "change_error_text": "Click here to try again.",
          "zip_text": "Price shown is for",
          "change_text": "Click here to change location.",
          "border_message": "Choose a meeting location and sign up today.",
          "zip_error_text": "Please enter a valid zip code.",
          "sign_up_link_default_url": {
            "url": "https://www.weightwatchers.com/us/checkout/?channelId=1&sponsorId=1&promotionId=1",
            "external": true
          },
          "default_url_external": true,
          "sign_up_link_csp_url": "https://www.weightwatchers.com/us/checkout/?",
          "sign_up_link_text": "Continue with Coaching",
          "sign_up_link_show": true,
          "sign_up_link_text_mobile": "Continue",
          "isMobile": true
        },
        "onlineplus_diff": {
          "default_price": "3.07",
          "pricing_text": "[price:token]/week nondyn",
          "product_id": null,
          "promo_offer_id": null,
          "type": "0",
          "duration": {
            "week": true
          },
          "error_text": "Unable to update price.",
          "change_error_text": "Click here to try again.",
          "zip_text": "Price shown is for",
          "change_text": "Change Zip.",
          "border_message": "Choose a meeting location and sign up today.",
          "zip_error_text": "Please enter a valid zip code.",
          "sign_up_link_default_url": {
            "url": "https://www.weightwatchers.com/us/checkout/?channelId=1&sponsorId=1&promotionId=1",
            "external": true
          },
          "default_url_external": true,
          "sign_up_link_csp_url": "https://www.weightwatchers.com/us/checkout/?",
          "sign_up_link_text": "Continue withe OnlinePlus",
          "sign_up_link_show": true,
          "sign_up_link_text_mobile": "OnlinePlus MOBILE",
          "isMobile": true
        },
        "meetings_diff": {
          "default_price": "666",
          "pricing_text": "[price:token]/week dyn",
          "product_id": "2",
          "promo_offer_id": null,
          "type": "1",
          "duration": {
            "week": true
          },
          "error_text": "Unable to update price.",
          "change_error_text": "Click here to try again.",
          "zip_text": "Price shown is for",
          "change_text": "Click here to change location.",
          "border_message": "Choose a meeting location and sign up today.",
          "zip_error_text": "Please enter a valid zip code.",
          "sign_up_link_default_url": {
            "url": "https://www.weightwatchers.com/us/checkout/?channelId=1&sponsorId=1&promotionId=1",
            "external": true
          },
          "default_url_external": true,
          "sign_up_link_csp_url": "https://www.weightwatchers.com/us/checkout/?",
          "sign_up_link_text": "Continue with Meetings",
          "sign_up_link_show": true,
          "isMobile": false
        },
        "coaching_diff": {
          "default_price": "666",
          "pricing_text": "[price:token]/week promo",
          "product_id": "6",
          "promo_offer_id": "11",
          "type": "2",
          "duration": {
            "week": true
          },
          "error_text": "Unable to update price.",
          "change_error_text": "Click here to try again.",
          "zip_text": "Price shown is for",
          "change_text": "Click here to change location.",
          "border_message": "Choose a meeting location and sign up today.",
          "zip_error_text": "Please enter a valid zip code.",
          "sign_up_link_default_url": {
            "url": "https://www.weightwatchers.com/us/checkout/?channelId=1&sponsorId=1&promotionId=1",
            "external": true
          },
          "default_url_external": true,
          "sign_up_link_csp_url": "https://www.weightwatchers.com/us/checkout/?",
          "sign_up_link_text": "Continue with Coaching",
          "sign_up_link_show": true,
          "isMobile": false
        },
        "onlineplus_diff_sticky": {
          "default_price": "3.07",
          "pricing_text": "[price:token]/week nondyn",
          "product_id": null,
          "promo_offer_id": null,
          "type": "0",
          "duration": {
            "week": true
          },
          "error_text": "Unable to update price.",
          "change_error_text": "Click here to try again.",
          "zip_text": "Price shown is for",
          "change_text": "Change Zip.",
          "border_message": "Choose a meeting location and sign up today.",
          "zip_error_text": "Please enter a valid zip code.",
          "sign_up_link_default_url": {
            "url": "https://www.weightwatchers.com/us/checkout/?channelId=1&sponsorId=1&promotionId=1",
            "external": true
          },
          "default_url_external": true,
          "sign_up_link_csp_url": "https://www.weightwatchers.com/us/checkout/?",
          "sign_up_link_text": "Continue withe OnlinePlus",
          "sign_up_link_show": true,
          "sign_up_link_text_mobile": "OnlinePlus",
          "isMobile": true
        },
        "meetings_diff_sticky": {
          "default_price": "666",
          "pricing_text": "[price:token]/week dyn",
          "product_id": "2",
          "promo_offer_id": null,
          "type": "1",
          "duration": {
            "week": true
          },
          "error_text": "Unable to update price.",
          "change_error_text": "Click here to try again.",
          "zip_text": "Price shown is for",
          "change_text": "Click here to change location.",
          "border_message": "Choose a meeting location and sign up today.",
          "zip_error_text": "Please enter a valid zip code.",
          "sign_up_link_default_url": {
            "url": "https://www.weightwatchers.com/us/checkout/?channelId=1&sponsorId=1&promotionId=1",
            "external": true
          },
          "default_url_external": true,
          "sign_up_link_csp_url": "https://www.weightwatchers.com/us/checkout/?",
          "sign_up_link_text": "Continue with Meetings",
          "sign_up_link_show": true,
          "sign_up_link_text_mobile": "Meetings",
          "isMobile": true
        },
        "coaching_diff_sticky": {
          "default_price": "666",
          "pricing_text": "[price:token]/week promo",
          "product_id": "6",
          "promo_offer_id": "11",
          "type": "2",
          "duration": {
            "week": true
          },
          "error_text": "Unable to update price.",
          "change_error_text": "Click here to try again.",
          "zip_text": "Price shown is for",
          "change_text": "Click here to change location.",
          "border_message": "Choose a meeting location and sign up today.",
          "zip_error_text": "Please enter a valid zip code.",
          "sign_up_link_default_url": {
            "url": "https://www.weightwatchers.com/us/checkout/?channelId=1&sponsorId=1&promotionId=1",
            "external": true
          },
          "default_url_external": true,
          "sign_up_link_csp_url": "https://www.weightwatchers.com/us/checkout/?",
          "sign_up_link_text": "Continue with Coaching",
          "sign_up_link_show": true,
          "sign_up_link_text_mobile": "Coaching",
          "isMobile": true
        }
      }
    },
    "lsw": {}
  },
  "geo": {},
  "zip": {},
  "storage": {},
  "mf": {
    "ready": {
      "$$state": {
        "status": 1
      }
    },
    "events": {}
  }
}
