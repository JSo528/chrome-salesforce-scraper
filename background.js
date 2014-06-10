// var HOSTNAME = "http://mg.orderahead.dev";
// var HOSTNAME = "http://mg.hipchemistlabs.com";
var HOSTNAME = "http://mg.orderaheadapp.com";

chrome.extension.onConnect.addListener(function(port) {
  var tab = port.sender.tab;

  // This will get called by the content script we execute in
  // the tab as a result of the user pressing the browser action.
  port.onMessage.addListener(function(info) {
  	var shared_code = "$('#storePhoneNumber').val(" + JSON.stringify(info.store_phone_number) + ");" +
				  		"$('#websiteUrl').val(" + JSON.stringify(info.store_website) + ");" +
				  		"$('#storeAddress').val(" + JSON.stringify(info.store_address) + ");" +
				  		"$('#storeCity').val(" + JSON.stringify(info.store_city) + ");" +
				  		"$('#storeState').val(" + JSON.stringify(info.store_state) + ");" +
				  		"$('#merchantPhoneNumber').val(" + JSON.stringify(info.merchant_phone_number) + ");" +
				  		"$('#salesforceLink').val(" + JSON.stringify(info.salesforce_link) + ");" +
				  		"$('#numberOfYelpReviews').val(" + JSON.stringify(info.number_of_yelp_reviews) + ");" +
				  		"$('#yelpUrl').val(" + JSON.stringify(info.yelp_url) + ");" +
				  		"$('#yelpRating').val(" + JSON.stringify(info.yelp_rating) + ");" +
				  		"$('#doesTakeout').val(" + JSON.stringify(info.does_takeout) + ");" +
				  		"$('#hasWifi').val(" + JSON.stringify(info.has_wifi) + ");" +
				  		"$('#doesCatering').val(" + JSON.stringify(info.does_catering) + ");" +
				  		"$('#parking').val(" + JSON.stringify(info.parking) + ");" +
				  		"$('#hasWaiterService').val(" + JSON.stringify(info.has_waiter_service) + ");" +
				  		"$('#restaurantCategory').val(" + JSON.stringify(info.restaurant_category) + ");" +
				  		"$('#priceRange').val(" + JSON.stringify(info.price_range) + ");" +
				  		"$('#doesDelivery').val(" + JSON.stringify(info.does_delivery) + ");"

		chrome.tabs.query({url: HOSTNAME + "/leads/*/edit"}, function (tab){
			if (tab.length > 0) {
				chrome.tabs.update(tab[0].id, {active: true}, function(tab){
				  tabId = tab.id
				  chrome.tabs.executeScript(tabId,
				  	{
				  		code: shared_code
				  	});
				})
			} else {
		  	chrome.tabs.create({
			    'url': HOSTNAME + '/leads/new',
			    'selected':true
				}, function(tab) {
				  tabId = tab.id
				  chrome.tabs.executeScript(tabId,
				  	{code:
				  		"$('#storeName').val(" + JSON.stringify(info.store_name) + ");" +
				  		"$('#merchantEmail').val(" + JSON.stringify(info.merchant_email) + ");" +
				  		"$('#merchantFirstName').val(" + JSON.stringify(info.merchant_first_name) + ");" +
				  		"$('#merchantLastName').val(" + JSON.stringify(info.merchant_last_name) + ");" +
				  		shared_code
				  	});
				})
			}
		});
  });
});

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "content_script.js"})
});
