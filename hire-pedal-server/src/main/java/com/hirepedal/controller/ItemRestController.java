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

import com.hirepedal.contracts.ItemCommonResponse;
import com.hirepedal.model.Item;
import com.hirepedal.services.Service;

@RestController
@RequestMapping(value = "/item")
@CrossOrigin(maxAge=4000)
public class ItemRestController {

	private final Logger LOG = LoggerFactory.getLogger(getClass());

	@Autowired
	private Service itemService;

	/*@RequestMapping(value = "/create", method = RequestMethod.POST)
	public Item addNewUsers(@RequestBody Item user) {
		LOG.info("Saving user.");
	}*/
	@RequestMapping(value = "/save", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public ItemCommonResponse addItem(@RequestBody Item item) {
		return itemService.addItem(item);
	}
	@RequestMapping(value = "/partner/{partnerId}", method = RequestMethod.GET,consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public ItemCommonResponse getItemsByPartnerId(@PathVariable("partnerId") String partnerId) {
		ItemCommonResponse response = new ItemCommonResponse();
		response = itemService.getItemsByPartnerId(partnerId);
		return response;
	}
}