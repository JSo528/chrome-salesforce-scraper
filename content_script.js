owner_name = $('#lea2_ileinner').text()
store_name = $('#lea3_ileinner').text().trim()
store_url = $('#lea12_ileinner').text()
store_phone = $('#lea8_ileinner').text()
owner_phone = $('#00NE000000299X2_ileinner').text()
owner_email = $('#lea11_ileinner a')[0].text
store_city = $('#00NE0000002BkhR_ileinner').text()
yelp_url = $('#00NE0000001ChhD_ileinner').text()
number_of_yelp_reviews = $('#00NE0000001ChhI_ileinner').text()
yelp_rating = $('#00NE0000003sjGS_ileinner').text()
does_delivery = $('#00NE0000003sjGN_ileinner').text()

if (does_delivery == "Yes") {
	does_delivery == "true"
} else {
	does_delivery == "false"
}

full_address = $('#lea16_ileinner').html().toString().split('<br>');

for(i=0;i<full_address.length;i++) {
	temp = full_address[i].match(/[ \w]+, [A-Z]{2}/)
	if (temp != null) {
		store_city = temp[0].split(',')[0];
		store_state = temp[0].split(',')[1].replace(/ /g, '');
		store_zipcode = full_address[i].match(/\d{5}/)[0];
	}
}

var leadInfo = {
	"store_name": store_name,
	"store_phone_number": store_phone,
	"store_website": store_url,
	"store_address": full_address[0],
	"store_city": store_city,
	"store_state": store_state,
	"store_zipcode": store_zipcode,
	"merchant_email": owner_email,
	"merchant_first_name": owner_name.split(' ')[0],
	"merchant_last_name": owner_name.split(' ')[1],
	"merchant_phone_number": owner_phone,
	"salesforce_link": document.location.href,
	"number_of_yelp_reviews": number_of_yelp_reviews,
	"yelp_url": yelp_url,
	"yelp_rating": yelp_rating,
	"does_delivery": does_delivery
}

chrome.extension.connect().postMessage(leadInfo)