package com.hirepedal.contracts;

import java.util.List;

import com.hirepedal.model.Item;

public class ItemCommonResponse extends BaseResponse{
	
	private List<Item> items;

	public List<Item> getItems() {
		return items;
	}

	public void setItems(List<Item> items) {
		this.items = items;
	}
	

}
