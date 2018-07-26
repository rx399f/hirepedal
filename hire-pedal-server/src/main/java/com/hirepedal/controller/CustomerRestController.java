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

import com.hirepedal.contracts.CartItems;
import com.hirepedal.contracts.CartItemsBaseResponse;
import com.hirepedal.contracts.CartsItemsBaseResponse;
import com.hirepedal.contracts.CommonBaseResponse;
import com.hirepedal.contracts.NearByBaseResponse;
import com.hirepedal.contracts.OrderBaseResponse;
import com.hirepedal.contracts.OrdersBaseResponse;
import com.hirepedal.model.Address;
import com.hirepedal.model.Cart;
import com.hirepedal.model.Customer;
import com.hirepedal.model.Order;
import com.hirepedal.services.Service;

@RestController
@RequestMapping(value = "/customer")
@CrossOrigin(maxAge=4000)
public class CustomerRestController {

	private final Logger LOG = LoggerFactory.getLogger(getClass());

	@Autowired
	private Service service;
	
	@RequestMapping(value = "/login", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public CommonBaseResponse loginCustomer(@RequestBody Customer customer) {
		CommonBaseResponse customers = service.loginCustomer(customer);
		return customers;
	}
	@RequestMapping(value = "/customers", method = RequestMethod.GET,consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public CommonBaseResponse getAllCustomers() {
		CommonBaseResponse customers = service.getAllCustomers();
		return customers;
	}
	@RequestMapping(value = "/register", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public CommonBaseResponse registerPartner(@RequestBody Customer customer) {
		return service.registerCustomer(customer);
	}
	@RequestMapping(value = "/address", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public CommonBaseResponse saveAddress(@RequestBody Address address) {
		return service.saveAddress(address);
	}
	@RequestMapping(value = "/nearby/{plat}/{plong}/{distance}", method = RequestMethod.GET,consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public NearByBaseResponse saveAddress(@PathVariable("plat") double plat, @PathVariable("plong") double plong, @PathVariable("distance") double distance) {
		return service.nearBy(plat, plong, distance);
	}
	@RequestMapping(value = "/cart", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public CartItemsBaseResponse addToCart(@RequestBody CartItems cartItems) {
		return service.addToCart(cartItems);
	}
	@RequestMapping(value = "/order", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public OrderBaseResponse addToCart(@RequestBody Order order) {
		return service.addOrder(order);
	}
	@RequestMapping(value = "/orderSearch", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public OrdersBaseResponse searchOrder(@RequestBody Order order) {
		return service.searchOrder(order);
	}
	@RequestMapping(value = "/cartSearch", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE,  produces=MediaType.APPLICATION_JSON_VALUE)
	public CartsItemsBaseResponse searchCartDetails(@RequestBody Cart cart) {
		return service.searchCartDetails(cart);
	}
}