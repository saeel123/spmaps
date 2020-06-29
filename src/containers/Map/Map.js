import React, { Component } from 'react';
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import classes from './Map.module.css';



class Map extends Component {
    render(){
        return(
            <div className={classes.leafletContainer}>
                <LeafletMap
                    center={[50, 10]}
                    zoom={6}
                    maxZoom={10}
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
                    <Marker position={[50, 10]}>
                    <Popup>
                        Popup for any custom information.
                    </Popup>
                    </Marker>
                </LeafletMap>
            </div>
        )
    }
}

export default Map;





