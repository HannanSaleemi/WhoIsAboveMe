import React, {Component} from 'react';
import './App.css';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class Map extends Component {

  constructor(props){
    super(props)
    this.state = {
      "position": [51.533128, 0.113951]
    }
  }

  componentDidMount() {
    fetch("http://flightaware.ddns.net/dump1090-fa/data/aircraft.json")
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <LeafletMap
        center={this.state.position}
        zoom={15}
        maxZoom={18}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={this.state.position}>
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default Map