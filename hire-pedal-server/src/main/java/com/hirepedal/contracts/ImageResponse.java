package com.hirepedal.contracts;

import java.util.List;

import com.hirepedal.model.Image;

public class ImageResponse extends BaseResponse{
	private List<Image> images;

	public List<Image> getImages() {
		return images;
	}

	public void setImages(List<Image> images) {
		this.images = images;
	}
}
