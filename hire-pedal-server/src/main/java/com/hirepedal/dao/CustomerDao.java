package com.hirepedal.dao;

import java.util.List;

import com.hirepedal.model.Address;
import com.hirepedal.model.Customer;

public interface CustomerDao {

	public Customer loginCustomer(Customer customer);

	public List<Customer> getAllCustomers();

	public Customer saveCustomer(Customer customerRes);

	public Customer findbyEmail(String email);

	public Address saveAddress(Address address);

}
