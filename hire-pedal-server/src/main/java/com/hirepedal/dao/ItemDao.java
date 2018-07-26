package com.hirepedal.dao;

import java.util.List;

import com.hirepedal.model.Item;

public interface ItemDao {

	public Item addItem(Item item);
	
	public List<Item> getItem(Item item);
	
}