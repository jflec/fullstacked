import React, { useEffect, useState } from 'react';

const ChampInfo = () => {
  const [champInfo, setChampInfo] = useState(null);

  const url = 'api/v1/champions/index';

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

  return (
    <div id="champ-page-container">
      {champInfo
        ?.filter((champ) => {
          if (champ.name.toLowerCase().includes('akali')) {
            return champ;
          }
        })
        .map((champ) => {
          return (
            <div id="champ-info-container">
              <h1>{champ.name}</h1>
              <h2>
                {champ.title} //{' '}
                {champ.tags
                  .slice(1, -1)
                  .replace(/["']/g, '')
                  .replace(/[,]/g, '')}
              </h2>
              <p>{champ.blurb}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ChampInfo;
