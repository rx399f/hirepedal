package com.hirepedal.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hirepedal.contracts.BaseResponse;
import com.hirepedal.contracts.CategoryBaseResponse;
import com.hirepedal.contracts.CommonBaseResponse;
import com.hirepedal.contracts.ConversationDetails;
import com.hirepedal.contracts.ItemCommonResponse;
import com.hirepedal.contracts.PartnerAddress;
import com.hirepedal.model.Category;
import com.hirepedal.model.Partner;
import com.hirepedal.services.Service;

@RestController
@RequestMapping(value = "/partner")
@CrossOrigin(maxAge=4000)
public class PartnerRestController {

	private final Logger LOG = LoggerFactory.getLogger(getClass());

	@Autowired
	private Service service;
	
	@RequestMapping(value = "/login", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public CommonBaseResponse loginPartner(@RequestBody Partner partner) {
		CommonBaseResponse partners = service.loginPartner(partner);
		return partners;
	}
	@RequestMapping(value = "/partners", method = RequestMethod.GET,consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public CommonBaseResponse getAllPartners() {
		CommonBaseResponse partners = service.getAllPartners();
		return partners;
	}
	@RequestMapping(value = "/register", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public CommonBaseResponse registerPartner(@RequestBody PartnerAddress partnerAdress) {
		return service.registerPartner(partnerAdress);
	}
	@RequestMapping(value = "/partner/{partnerId}", method = RequestMethod.GET,consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public CommonBaseResponse getPartnerId(@PathVariable("partnerId") String partnerId) {
		return service.getPartnerIds(partnerId);
	}
	@RequestMapping(value = "/partner/category", method = RequestMethod.GET,consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public CategoryBaseResponse getCategories() {
		return service.getCategories();
	}
	@RequestMapping(value = "/category", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public CategoryBaseResponse addCategories(@RequestBody Category category) {
		return service.addCategories(category);
	}
	@RequestMapping(value = "/sendConversationDetails", method = RequestMethod.POST)
	public BaseResponse sendConversationDetails(@RequestBody ConversationDetails conversationDetails) {
		return service.sendConversationDetails(conversationDetails.getName(), conversationDetails.getEmailAddress(), conversationDetails.getPhone(), conversationDetails.getMessage());
	}
}