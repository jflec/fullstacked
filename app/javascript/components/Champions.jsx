import React, { useEffect, useState } from 'react';
import Card from './Card';

const Champions = () => {
  const [champList, setChampList] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const url = 'api/v1/champions/index';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setChampList(json);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div id="champ-container">
      <input
        id="search"
        type="text"
        placeholder="Search"
        spellCheck="false"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></input>
      <ul id="champ-list">
        {champList
          ?.filter((champ) => {
            if (searchTerm == '') {
              return champ;
            } else if (
              champ.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return champ;
            }
          })
          .map((champ) => {
            return (
              <Card
                key={champ.id}
                name={champ.name}
                tags={champ.tags}
                title={champ.title}
                blurb={champ.blurb}
                info={champ.info}
                id={champ.id}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default Champions;
