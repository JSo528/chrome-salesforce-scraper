owner_first_name = $('#00NE0000004xDKp_ileinner').text()
owner_last_name = $('#00NE0000004xLb0_ileinner').text()
store_name = $('#opp4_ileinner').text()
store_url = $('#00NE0000004xLYp_ileinner').text()
owner_phone = $('#00NE0000004xLYk_ileinner').text()
store_phone = $('#00NE0000004xLb5_ileinner').text()

if($('#00NE0000004xN2b_ileinner a')[0]){
	owner_email = $('#00NE0000004xN2b_ileinner a')[0].text
} else {
	owner_email = ""
}

store_address = $('#00NE0000004xLW0_ileinner').text()
store_city = $('#00NE0000004xLVl_ileinner').text()
store_state = $('#00NE0000004xLbP_ileinner').text()
yelp_url = $('#00NE0000004xLWA_ileinner a').text()
number_of_yelp_reviews = $('#00NE0000004xLW5_ileinner').text()
yelp_rating = $('#00NE0000004xCaD_ileinner').text()
does_delivery = $('#00NE0000004xLWP_ileinner').text()
does_catering = $('#00NE0000004xLYL_ileinner').text()
does_takeout = $('#00NE0000004xLWU_ileinner').text()
parking = $('#00NE0000004xLYV_ileinner').text()
has_wifi = $('#00NE0000004xLYQ_ileinner').text()
has_waiter_service = $('#00NE0000004xLYa_ileinner').text()
restaurant_category = $('#00NE0000004xLWF_ileinner').text()
price_range = $('#00NE0000004xCa3_ileinner').text()
setup_fee = $('#00NE0000004wRNr_ileinner').text()
subscription_fee = $('#00NE0000004wRNw_ileinner').text()
commission_percentage = $('#00NE0000004xLeE_ileinner').text()
motivation_for_signing_up = $('#00NE0000004xLe4_ileinner').text()
menu_notes = $('#00NE0000004xLg5_ileinner').text()
online_ordering_notes = $('#00NE0000004xLg0_ileinner').text()
order_size_limit = $('#00NE0000004xLfg_ileinner').text()
busy_prep_time = $('#00NE0000004xLfb_ileinner').text()
default_prep_time = $('#00NE0000004xLf7_ileinner').text()
deposit_type = $('#00NE0000004xLeJ_ileinner').text()
feedback_email = $('#00NE0000004xLdp_ileinner').text()
receive_orders_via = $('#00NE0000004xLda_ileinner').text()
webmaster_name  = $('#00NE0000004xLfl_ileinner').text()
webmaster_phone = $('#00NE0000004xLfv_ileinner').text()
webmaster_email = $('#00NE0000004xLfq_ileinner').text()
pickup_instructions = $('#00NE0000004xLex_ileinner').text()
decision_maker_notes = $('#00NE0000004xLdz_ileinner').text()
test_order_notes = $('#00NE0000004xLdu_ileinner').text()
merchant_bio = $('#00NE0000004xLdV_ileinner').text()
twitter_handle = $('#00NE0000004xLdL_ileinner').text()
facebook_url = $('#00NE0000004xLdG_ileinner').text()



var leadInfo = {
	"store_name": store_name,
	"store_phone_number": store_phone,
	"store_website": store_url,
	"store_address": store_address,
	"store_city": store_city,
	"store_state": store_state,
	"merchant_email": owner_email,
	"merchant_first_name": owner_first_name,
	"merchant_last_name": owner_last_name,
	"merchant_phone_number": owner_phone,
	"salesforce_link": document.location.href,
	"number_of_yelp_reviews": number_of_yelp_reviews,
	"yelp_url": yelp_url,
	"yelp_rating": yelp_rating,
	"does_delivery": does_delivery,
	"does_takeout": does_takeout,
	"has_wifi": has_wifi,
	"does_catering": does_catering,
	"parking": parking,
	"has_waiter_service": has_waiter_service,
	"restaurant_category": restaurant_category,
	"price_range": price_range
}

chrome.extension.connect().postMessage(leadInfo)