import React, { useEffect, useState } from 'react';

const ChampInfo = () => {
  const [champInfo, setChampInfo] = useState(null);

  const url = `api/v1/champions/${60}`;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setChampInfo(json);
    } catch (error) {
      console.log('error', error);
    }
  };

  if (!champInfo) return <div id="champ-page-container">Loading Data...</div>;

  return (
    <div id="champ-page-container">
      <div id="champ-info-container">
        <h1>{champInfo.name.toLowerCase()}</h1>
        <h2>
          {champInfo.title} //{' '}
          {champInfo.tags.slice(1, -1).replace(/["']/g, '').replace(/[,]/g, '')}
        </h2>
        <p>{champInfo.blurb}</p>
      </div>
    </div>
  );
};

export default ChampInfo;
