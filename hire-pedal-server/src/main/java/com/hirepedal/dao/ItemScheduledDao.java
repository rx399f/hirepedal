package com.hirepedal.dao;

import java.util.List;

import com.hirepedal.model.ItemScheduled;

public interface ItemScheduledDao {

	List<ItemScheduled> getAvailableItem(String itemId);

	ItemScheduled addItemScheduled(ItemScheduled itemScheduled);
	
	
}