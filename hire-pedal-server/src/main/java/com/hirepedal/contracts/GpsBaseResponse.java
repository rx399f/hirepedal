package com.hirepedal.contracts;

import java.util.List;

import com.hirepedal.model.GPSTrack;

public class GpsBaseResponse extends BaseResponse{
	List<GPSTrack> locations;

	public List<GPSTrack> getLocations() {
		return locations;
	}

	public void setLocations(List<GPSTrack> locations) {
		this.locations = locations;
	}
	
	
}
