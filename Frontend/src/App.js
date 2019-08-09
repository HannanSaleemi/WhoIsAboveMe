import React, {Component} from 'react';
import './App.css';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

class Map extends Component {

  constructor(props){
    super(props)
    this.state = {
      "position": [51.533128, 0.113951],
      "flights": null
    }
  }

  componentDidMount() {
    fetch("http://0.0.0.0:5001/api/v1/flights/getAllFlightInfo")
    .then(response => response.json())
    .then(data => this.setState({
      "flights": data
    }))
  }

  render() {

    var flightLocations = []
    var renderMarkers;
    if(this.state.flights) {
      renderMarkers = this.state.flights.map((flight) => {
        return (
          <Marker position={[flight.Lat, flight.Lon]}>
            <Popup>
              Info
            </Popup>
          </Marker>
        )
      })
    }

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
        {renderMarkers}
      </LeafletMap>
    );
  }
}

export default Map