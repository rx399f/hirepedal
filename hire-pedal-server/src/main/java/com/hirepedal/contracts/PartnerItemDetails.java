package com.hirepedal.contracts;

import java.util.List;
import java.util.Set;

import com.hirepedal.model.Address;
import com.hirepedal.model.Item;
import com.hirepedal.model.Partner;

public class PartnerItemDetails {
	
	private Partner partner;
	private Address address;
	private List<String> url;
	private String categoryType;
	private Set<Item> items;
	
	
	public Partner getPartner() {
		return partner;
	}
	public void setPartner(Partner partner) {
		this.partner = partner;
	}
	public Address getAddress() {
		return address;
	}
	public void setAddress(Address address) {
		this.address = address;
	}
	public List<String> getUrl() {
		return url;
	}
	public void setUrl(List<String> url) {
		this.url = url;
	}
	public String getCategoryType() {
		return categoryType;
	}
	public void setCategoryType(String categoryType) {
		this.categoryType = categoryType;
	}
	public Set<Item> getItems() {
		return items;
	}
	public void setItems(Set<Item> items) {
		this.items = items;
	}
	
}
