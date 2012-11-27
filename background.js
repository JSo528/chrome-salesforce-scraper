chrome.extension.onConnect.addListener(function(port) {
  var tab = port.sender.tab;

  // This will get called by the content script we execute in
  // the tab as a result of the user pressing the browser action.
  port.onMessage.addListener(function(info) {
		chrome.tabs.query({url: "http://macq.orderaheadapp.com/leads/*/edit"}, function (tab){
			if (tab.length > 0) {
				chrome.tabs.update(tab[0].id, {active: true}, function(tab){
				  tabId = tab.id
				  chrome.tabs.executeScript(tabId, 
				  	{code:
				  		"$('#storePhoneNumber').val(" + JSON.stringify(info.store_phone_number) + ");" +
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
				  		"$('#merchantPhoneNumber').val(" + JSON.stringify(info.merchant_phone_number) + ");" +
				  		"$('#menuComments').val(" + JSON.stringify(info.menu_comments) + ");" +
				  		"$('#menuSourceUrls').val(" + JSON.stringify(info.menu_links) + ");" +
				  		"$('#storeHoursText').val(" + JSON.stringify(info.hours_comments) + ");" +
				  		"$('#salesforceLink').val(" + JSON.stringify(info.salesforce_link) + ");"
				  	})
				})
			} else {
		  	chrome.tabs.create({
			    'url':'http://macq.orderaheadapp.com/leads/new',
			    'selected':true
				}, function(tab) {
				  tabId = tab.id
				  chrome.tabs.executeScript(tabId, 
				  	{code:
				  		"$('#storeName').val(" + JSON.stringify(info.store_name) + ");" +
				  		"$('#storePhoneNumber').val(" + JSON.stringify(info.store_phone_number) + ");" +
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
				  		"$('#merchantEmail').val(" + JSON.stringify(info.merchant_email) + ");" +
				  		"$('#merchantFirstName').val(" + JSON.stringify(info.merchant_first_name) + ");" +
				  		"$('#merchantLastName').val(" + JSON.stringify(info.merchant_last_name) + ");" +
				  		"$('#merchantPhoneNumber').val(" + JSON.stringify(info.merchant_phone_number) + ");" +
				  		"$('#menuComments').val(" + JSON.stringify(info.menu_comments) + ");" +
				  		"$('#commission').val(" + JSON.stringify(info.commission_rate) + ");" +
				  		"$('#menuSourceUrls').val(" + JSON.stringify(info.menu_links) + ");" +
				  		"$('#storeHoursText').val(" + JSON.stringify(info.hours_comments) + ");" +
				  		"$('#salesforceLink').val(" + JSON.stringify(info.salesforce_link) + ");"
				  	});
				})
			}
		});
  });
});



chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "content_script.js"})
});

