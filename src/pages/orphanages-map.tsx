import React from 'react';

import mapMarkerImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

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

        <div></div>

        <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#FFF"></FiPlus>
        </Link>
    </div>
);

export default OrphanagesMap;
