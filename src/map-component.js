import React from 'react';
import { Col } from 'react-bootstrap';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

export default function MapContainer() {
    return (
      <Col style={{height: '100vh', width: '100vw'}}>
        <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'}
                    loadingElement={<div style={{height: '100%'}}/> }
                    containerElement={<div style={{height: '100%'}}/> }
                    mapElement={<div style={{height: '100%'}}/> }
        />
      </Col>
    )
}
function Map() {
    return( 
     <GoogleMap defaultZoom={10}
                defaultCenter={{lat: 36.6588 , lng: 57.1836}}/>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));