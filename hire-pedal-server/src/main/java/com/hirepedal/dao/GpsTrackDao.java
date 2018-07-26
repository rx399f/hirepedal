package com.hirepedal.dao;

import java.util.List;

import com.hirepedal.model.GPSTrack;

public interface GpsTrackDao {

	List<GPSTrack> getLocations(String deviceId, int limit);


}
