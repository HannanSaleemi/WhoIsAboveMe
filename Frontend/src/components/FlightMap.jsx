import React, { Component } from "react";
// import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import "../assets/styles/_flightmap.scss";

export default class FlightMap extends Component {

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

        var renderMarkers;
        if(this.state.flights) {
            renderMarkers = this.state.flights.map((flight) => {
                console.log(flight)
                return (
                    <Marker position={[flight.Lat, flight.Lon]}>
                        <Popup>
                            Flight: {flight.Flight}
                            <br/>
                            ICAO: {flight.ICAO}
                        </Popup>
                    </Marker>
                )
            })
        }

        return (
            <div>

                <Map
                    center={this.state.position}
                    zoom="12"
                >
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    />

                    {renderMarkers}

                </Map>

                {/*
                <LeafletMap
                    center={this.state.position}
                    zoom={10}
                    maxZoom={18}
                    attributionControl={true}
                    zoomControl={true}
                    doubleClickZoom={false}
                    scrollWheelZoom={false}
                    dragging={true}
                    animate={true}
                    easeLinearity={0.35}
                >

                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                />

                {renderMarkers}

                </LeafletMap>
                */}

            </div>
        )
    }

}