full_address = $('#acc17_ileinner').html().toString().split('<br>');
for(i=0;i<full_address.length;i++) {
	temp = full_address[i].match(/[ \w]+, [A-Z]{2}/)
	// console.log(temp != null)
	if (temp != null) {
		store_city = temp[0].split(',')[0];
		store_state = temp[0].split(',')[1];
	}
}

pickup_instructions = $('#00NE0000001EHrE_ileinner').text()
if (pickup_instructions.split(' ').length < 6) {
	pickup_instrutions = "Please go to the " + pickup_instructions + " and ask for your OrderAhead order by name."
}

var leadInfo = {
	"store_name": $('#acc2_ileinner').text().replace("[View Hierarchy]", "").trim(),
	"store_phone_number": $('#acc10_ileinner').text(),
	"store_website": $('#acc12_ileinner').text(),
	"routing_number": $('#00NE0000001CfnZ_ileinner').text(),
	"bank_account_number": $('#00NE0000001Cfm4_ileinner').text(),
	"store_fax_number": $('#00NE0000001EHoA_ileinner').text(),
	"default_prep_time": $('#00NE0000001Cg9f_ileinner').text().match(/\d+/)[0],
	"busy_prep_time": $('#00NE0000001Cgwh_ileinner').text().match(/\d+/)[0],
	"pickup_instructions": pickup_instrutions,
	"store_address": full_address[0],
	"store_city": store_city,
	"store_state": store_state,
	"merchant_email": $($('.gmailLink a')[0]).text().replace('[Gmail', '').trim(),
	"merchant_first_name": $($('.dataCell')[0]).text().split(' ')[0],
	"merchant_last_name": $($('.dataCell')[0]).text().split(' ')[1],
	"merchant_phone_number": $($('.PhoneNumberElement')[1]).text(),
	"menu_comments": $('#00NE0000001EHyp_ileinner').text()
}

console.log(leadInfo)
chrome.extension.connect().postMessage(leadInfo)
// chrome.extension.sendMessage(leadInfo)