import React from 'react';
import Tilt from 'react-tilt';
import ChampionPage from './ChampionPage';
import { Link } from 'react-router-dom';

const Card = ({ name, tags, title, id }) => {
  return (
    <Tilt
      options={{ max: 25, reverse: false, scale: 1.05, speed: 400 }}
      key={id}
    >
      <Link to={`/champions/${id}`}>
        <div className="champ-item">
          <div className="top-half">
            <p id="name">{name}</p>
            <p id="title">{title}</p>
          </div>
          <div className="bottom-half">
            <p id="tags">
              {tags.slice(1, -1).replace(/["']/g, '').replace(/[,]/g, '')}
            </p>
          </div>
        </div>
      </Link>
    </Tilt>
  );
};

export default Card;
