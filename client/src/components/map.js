import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const LocationMarker = ({ text }) => <div style={{
  height: 50,
  width: 50,
  top: -20,
  left: -30,
  position: 'relative',
  color: 'black'
}}>{text}</div>;

export default class VenueMap extends Component {
  static defaultProps = {
    center: {lat: 35.77, lng: -78.63},
    zoom: 15
  };

  render() {
    return (
      <div className='googleMap' style={{
        height: '400px',
        width: '400px',
        textAlign: 'center',
        position: 'absolute'
      }}>
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <LocationMarker
          lat={35.776136}
          lng={-78.635987}
          text={'Marker'}
        />
      </GoogleMapReact>
      </div>
    );
  }
}
