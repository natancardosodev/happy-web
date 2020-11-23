import React from 'react';

import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanages-map.scss';

interface Props {
    name?: string;
}

const OrphanagesMap: React.FC<Props> = (props) => (
    <div id="page-map">
        <aside>
            <header>
                <img src={mapMarkerImg} alt="Map" />

                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>
            <footer>
                <strong>João Pessoa</strong>
                <span>Paraíba</span>
            </footer>
        </aside>

        <MapContainer center={[-7.123988, -34.8572152]} zoom={14} style={{ width: '100%', height: '100%' }}>
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {/* <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}.png@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            /> */}
        </MapContainer>

        <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#FFF"></FiPlus>
        </Link>
    </div>
);

export default OrphanagesMap;
