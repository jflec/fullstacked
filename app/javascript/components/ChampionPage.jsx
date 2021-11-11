import React from 'react';
import { Link } from 'react-router-dom';
import ChampInfo from './ChampInfo';

const ChampionPage = () => {
  return (
    <div id="champion-page-container">
      <Link to="/">
        <div id="back-button">👈</div>
      </Link>
      <ChampInfo />
    </div>
  );
};

export default ChampionPage;
