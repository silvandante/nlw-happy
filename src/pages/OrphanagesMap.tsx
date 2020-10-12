import React from 'react';

import {Link} from 'react-router-dom';

import {FiPlus} from 'react-icons/fi';

import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import "../styles/pages/orphanages-map.css";

import mapMarkerImg from '../images/map-marker.svg';

function OrphanagesMap () {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="map-marker-happy"/>
                    
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Boa Vista</strong>
                    <span>Roraima</span>
                </footer>
            </aside>

            <Map 
                center={[2.814952, -60.694122]}
                zoom={13}
                style={{ width: "100%", height: "100%"}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size="32" color="#fff"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;