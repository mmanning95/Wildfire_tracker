import React from 'react';
import { GoogleMap, useJsApiLoader, OverlayView } from '@react-google-maps/api';
import { LocalMarker } from './LocalMarker';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 32.509930,
  lng: -92.121742
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY  
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback((mapInstance) => {
    setMap(mapInstance); 
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6} 
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
        <OverlayView
            position={{ lat: center.lat, lng: center.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}           
        >
        <LocalMarker />
        </OverlayView>

    </GoogleMap>
  ) : (
    <div>Loading Map...</div>  
  );
}

export default Map;
