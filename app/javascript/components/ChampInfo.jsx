import React, { useEffect, useState } from 'react';
// import base64 from 'react-native-base64';

const ChampInfo = () => {
  const [champInfo, setChampInfo] = useState(null);

  const url = `api/v1/champions/${window.location.href.substring(
    window.location.href.lastIndexOf('/') + 1
  )}`;

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

  // function handleClick(e) {
  //   e.preventDefault();
  //   createBadge();
  // }

  // const createBadge = async () => {
  //   try {
  //     const url =
  //       'https://sandbox-api.credly.com/v1/organizations/ceb32527-57cc-4349-b223-e3e3ce935432/badges';
  //     const key = base64.encode('Dc0ShUYGDBtaebROIk5SzsRqK1UtJlupEODv');
  //     const response = await fetch(url, obj);
  //     const obj = {
  //       method: 'POST',
  //       headers: {
  //         Authorization: `Basic ${key}`,
  //       },
  //       body: {
  //         badge_template_id: 'e5df8d87-b9b4-4fee-b52f-b4f8d78c6b21',
  //         recipient_email: `${champInfo.name.toLowerCase()}@gmail.com`,
  //         issued_at: '2014-04-01 09:41:00 -0500',
  //         name: `${champInfo.name}`,
  //       },
  //     };
  //     console.log('Completed', response);
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };

  if (!champInfo) return <div id="champ-page-container">Fetching Data</div>;

  return (
    <div id="champ-page-container">
      <div id="champ-info-container">
        <h1>{champInfo.name.toLowerCase()}</h1>
        <h2>
          {champInfo.title.toLowerCase()} //{' '}
          {champInfo.tags
            .slice(1, -1)
            .replace(/["']/g, '')
            .replace(/[,]/g, '')
            .toLowerCase()}
        </h2>
        <p>{champInfo.blurb}</p>
        <div id="badges-container">
          <div id="make-badge-button">➕</div>
          {/* <div id="make-badge-button" onClick={handleClick}> */}
          <div id="badges">
            <div className="temp-badge"></div>
            <div className="temp-badge"></div>
            <div className="temp-badge"></div>
            <div className="temp-badge"></div>
            <div className="temp-badge"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampInfo;
