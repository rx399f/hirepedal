package com.hirepedal.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class CustomerItem {
	
	@Id
	private String customerItemId;
	private String customerId;
	private String itemId;
	private boolean isAvailable;
	public String getCustomerItemId() {
		return customerItemId;
	}
	public void setCustomerItemId(String customerItemId) {
		this.customerItemId = customerItemId;
	}
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public String getItemId() {
		return itemId;
	}
	public void setItemId(String itemId) {
		this.itemId = itemId;
	}
	public boolean isAvailable() {
		return isAvailable;
	}
	public void setAvailable(boolean isAvailable) {
		this.isAvailable = isAvailable;
	}
	
	

}
