// var HOSTNAME = "http://macq.orderahead.dev";
var HOSTNAME = "http://mg.orderaheadapp.com";

chrome.extension.onConnect.addListener(function(port) {
  var tab = port.sender.tab;

  // This will get called by the content script we execute in
  // the tab as a result of the user pressing the browser action.
  port.onMessage.addListener(function(info) {
  	var shared_code = "$('#storePhoneNumber').val(" + JSON.stringify(info.store_phone_number) + ");" +
				  		"$('#storeWebsiteUrl').val(" + JSON.stringify(info.store_website) + ");" +
				  		"$('#storeRoutingNumber').val(" + JSON.stringify(info.routing_number) + ");" +
				  		"$('#storeBankAccountNumber').val(" + JSON.stringify(info.bank_account_number) + ");" +
				  		"$('#storeFaxNumber').val(" + JSON.stringify(info.store_fax_number) + ");" +
				  		"$('#storeDefaultPrepDuration').val(" + JSON.stringify(info.default_prep_time) + ");" +
				  		"$('#storeBusyPrepDuration').val(" + JSON.stringify(info.busy_prep_time) + ");" +
				  		"$('#storePickupInstructions').val(" + JSON.stringify(info.pickup_instructions) + ");" +
				  		"$('#storeAddress').val(" + JSON.stringify(info.store_address) + ");" +
				  		"$('#storeCity').val(" + JSON.stringify(info.store_city) + ");" +
				  		"$('#storeState').val(" + JSON.stringify(info.store_state) + ");" +
				  		"$('#storeZipCode').val(" + JSON.stringify(info.store_zipcode) + ");" +
				  		"$('#merchantPhoneNumber').val(" + JSON.stringify(info.merchant_phone_number) + ");" +
				  		"$('#menuComments').val(" + JSON.stringify(info.menu_comments) + ");" +
				  		"$('#menuSourceUrls').val(" + JSON.stringify(info.menu_links) + ");" +
				  		"$('#storeHoursText').val(" + JSON.stringify(info.hours_comments) + ");" +
				  		"$('#salesforceLink').val(" + JSON.stringify(info.salesforce_link) + ");" + 
				  		"$('#numberOfYelpReviews').val(" + JSON.stringify(info.number_of_yelp_reviews) + ");" +
				  		"$('#yelpUrl').val(" + JSON.stringify(info.yelp_url) + ");" +
				  		"$('#yelpRating').val(" + JSON.stringify(info.yelp_rating) + ");" +
				  		"$('#depositTypeCheckBox').val(" + JSON.stringify(info.deposit_type) + ");"

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
				  		"$('#commission').val(" + JSON.stringify(info.commission_rate) + ");" +
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
