import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'

const LocationMarker = ({ text }) => <div style={{
  height: 15,
  width: 10,
  top: -20,
  left: -30,
  background: 'red',
  fontWeight: 'bold',
  position: 'relative',
  color: 'black'
}}>{text}</div>;

export default class VenueMap extends Component {
  static defaultProps = {
    center: {lat: 35.77613, lng: -78.63598},
    zoom: 15
  };

  render() {
    return (
      <div className='googleMap' style={{
        height: '400px',
        width: '100%',
        textAlign: 'center',
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '0px'
      }}>
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        style={{textAlign: 'center', marginRight: 'auto', marginLeft: 'auto'}}
      >
        <LocationMarker
          lat={this.props.latitude}
          lng={this.props.longitude}
          text={'X'}
        />
      </GoogleMapReact>
      </div>
    );
  }
}
