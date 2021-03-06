import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import classes from './Map.module.css';



class Map extends Component {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
      }

    render(){
        const position = [this.state.lat, this.state.lng]

        return(
            <div className={classes.leafletContainer}>
                <Map center={position} zoom={this.state.zoom}>
                <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
                    <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker>
                </Map>
            </div>
        )
    }
}

export default Map;





