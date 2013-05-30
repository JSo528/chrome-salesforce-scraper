full_address = $('#acc17_ileinner').html().toString().split('<br>');

for(i=0;i<full_address.length;i++) {
	temp = full_address[i].match(/[ \w]+, [A-Z]{2}/)
	if (temp != null) {
		store_city = temp[0].split(',')[0];
		store_state = temp[0].split(',')[1];
		store_zipcode = full_address[i].match(/\d{5}/)[0];
	}
}

pickup_instructions = $('#00NE0000001EHrE_ileinner').text()
if (pickup_instructions.split(' ').length < 6) {
	pickup_instructions = "Please go to the " + pickup_instructions + " and ask for your OrderAhead order by name."
}

menu_links = ""
$($('.list')[3]).find('tr').each(function() {
	if ($(this).find('td:eq(1) a').text().toLowerCase().match('menu') != null) {
		menu_links = menu_links + document.location.host + $(this).find('td:eq(1) a').attr('href') + "  "
	}
})

if ($('#00NE0000002B12H_ileinner').text() == "Check") {
	deposit_type = 1;
} else {
	deposit_type = 0;
}
hours_comments = "Normal Hours: " + $('#00NE0000001CgrH_ileinner').text() + "\n" + "Busy Hours: " + $('#00NE0000001EHr9_ileinner').text()
var leadInfo = {
	"store_name": $('#acc2_ileinner').text().replace("[View Hierarchy]", "").trim(),
	"store_phone_number": $('#acc10_ileinner').text(),
	"store_website": $('#acc12_ileinner').text(),
	"routing_number": $('#00NE0000001CfnZ_ileinner').text(),
	"bank_account_number": $('#00NE0000001Cfm4_ileinner').text(),
	"store_fax_number": $('#00NE0000001EHoA_ileinner').text(),
	"default_prep_time": $('#00NE0000001Cg9f_ileinner').text().match(/\d+/),
	"busy_prep_time": $('#00NE0000001Cgwh_ileinner').text().match(/\d+/),
	"pickup_instructions": pickup_instructions,
	"store_address": full_address[0],
	"store_city": store_city,
	"store_state": store_state,
	"store_zipcode": store_zipcode,
	"merchant_email": $($('.gmailLink a')[0]).text().replace('[Gmail', '').trim(),
	"merchant_first_name": $($('.contactBlock .dataCell')[0]).text().split(' ')[0],
	"merchant_last_name": $($('.contactBlock .dataCell')[0]).text().split(' ')[1],
	"merchant_phone_number": $($('.PhoneNumberElement')[1]).text(),
	"menu_comments": $('#00NE0000001EHyp_ileinner').text(),
	"commission_rate": $('#00NE0000001EHoZ_ileinner').text().replace('%', ''),
	"menu_links": menu_links,
	"hours_comments": hours_comments,
	"salesforce_link": document.location.href,
	"number_of_yelp_reviews": $('#00NE0000001ChhN_ileinner').text(),
	"deposit_type": deposit_type
}

chrome.extension.connect().postMessage(leadInfo)