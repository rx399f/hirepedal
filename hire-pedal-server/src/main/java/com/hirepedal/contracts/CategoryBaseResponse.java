package com.hirepedal.contracts;

import java.util.List;

import com.hirepedal.model.Category;

public class CategoryBaseResponse extends BaseResponse{
	
	List<Category> categories;

	public List<Category> getCategories() {
		return categories;
	}

	public void setCategories(List<Category> categories) {
		this.categories = categories;
	}
	
	
}
