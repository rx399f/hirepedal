package com.hirepedal.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class ItemScheduled {
	
	@Id
	private String itemScheduledId;
	private String itemId;
	private Date bookingStartDate;
	private Date bookingEndDate;
	private String status;
	private Date addedOn;
	
	
	public Date getAddedOn() {
		return addedOn;
	}
	public void setAddedOn(Date addedOn) {
		this.addedOn = addedOn;
	}
	public String getItemScheduledId() {
		return itemScheduledId;
	}
	public void setItemScheduledId(String itemScheduledId) {
		this.itemScheduledId = itemScheduledId;
	}
	public String getItemId() {
		return itemId;
	}
	public void setItemId(String itemId) {
		this.itemId = itemId;
	}
	public Date getBookingStartDate() {
		return bookingStartDate;
	}
	public void setBookingStartDate(Date bookingStartDate) {
		this.bookingStartDate = bookingStartDate;
	}
	public Date getBookingEndDate() {
		return bookingEndDate;
	}
	public void setBookingEndDate(Date bookingEndDate) {
		this.bookingEndDate = bookingEndDate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
}
