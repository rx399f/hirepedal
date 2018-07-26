package com.hirepedal.contracts;

import java.util.List;

import com.hirepedal.model.Address;
import com.hirepedal.model.Customer;
import com.hirepedal.model.Partner;

public class CommonBaseResponse extends BaseResponse{
	
	List<Partner> partners;
	
	List<Customer> customers;
	
	List<Address> addressess;
	
	private PartnerAddress partner;
	

	public PartnerAddress getPartner() {
		return partner;
	}

	public void setPartner(PartnerAddress partner) {
		this.partner = partner;
	}

	public List<Address> getAddressess() {
		return addressess;
	}

	public void setAddressess(List<Address> addressess) {
		this.addressess = addressess;
	}

	public List<Partner> getPartners() {
		return partners;
	}

	public void setPartners(List<Partner> partners) {
		this.partners = partners;
	}

	public List<Customer> getCustomers() {
		return customers;
	}

	public void setCustomers(List<Customer> customers) {
		this.customers = customers;
	}
	
}
