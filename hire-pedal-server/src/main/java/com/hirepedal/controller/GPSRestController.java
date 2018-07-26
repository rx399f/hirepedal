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

import com.hirepedal.contracts.CommonBaseResponse;
import com.hirepedal.contracts.GpsBaseResponse;
import com.hirepedal.contracts.NearByBaseResponse;
import com.hirepedal.model.Address;
import com.hirepedal.model.Customer;
import com.hirepedal.model.GPSTrack;
import com.hirepedal.services.Service;

@RestController
@RequestMapping(value = "/gps")
@CrossOrigin(maxAge=4000)
public class GPSRestController {

	private final Logger LOG = LoggerFactory.getLogger(getClass());

	@Autowired
	private Service service;
	
	@RequestMapping(value = "/location", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public GpsBaseResponse addLocation(@RequestBody GPSTrack track) {
		GpsBaseResponse loc = service.addLocation(track);
		return loc;
	}
	@RequestMapping(value = "/locations/{deviceId}/{limit}", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public GpsBaseResponse getLocations(@PathVariable("deviceId") String deviceId, @PathVariable("limit") int limit) {
		return service.getLocations(deviceId, limit);
	}

}