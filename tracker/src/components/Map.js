import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { MarkerClusterer } from '@googlemaps/markerclusterer'; 
import firelogo from './fire_logo.png'

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 32.509930,
  lng: -92.121742
};

function Map({ eventData }) {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const [map, setMap] = useState(null);
  

  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  useEffect(() => {
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) { // find wildfire events (8)
     
      return new window.google.maps.Marker({
        position: { lat: ev.geometries[0].coordinates[1], lng: ev.geometries[0].coordinates[0] },
        icon: {
          url: firelogo, 
          scaledSize: new window.google.maps.Size(30, 30),  
        },
        
        title: `Location: ${ev.title}\nID: ${ev.id}`,
      });
      
    }
    return null;
  }).filter(marker => marker !== null); // filter not markers


  //https://developers.google.com/maps/documentation/javascript/marker-clustering#maps_marker_clustering-javascript

    if (markers.length > 0 && map) {
      //never used but "new" adds the markers to the map
      // eslint-disable-next-line
      const markerCluster = new MarkerClusterer({ markers, map});
    }
  }, [ eventData, map]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >

    </GoogleMap>
  ) : (
    <div>Loading Map...</div>
  );
}

export default Map;
