import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Animation from '../components/Animation/Animation';
import ButtonGroup from '../components/ButtonGroup/ButtonGroup';
import Details from '../components/Details/Details';
import styled from 'styled-components';
import bpmData from '../bpm.json';

const MetronomeWrapper = styled.div`
  width: 476px;
  margin: auto auto;
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Metronome = () => {
  const [selectedBpm, setSelectedBpm] = useState(72);
  const [data, setData] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://api.getsongbpm.com/tempo/?api_key=${process.env.REACT_APP_GETSONGBPM_APIKEY}&bpm=${selectedBpm}`);
      const jsonResult = await res.json();
      const groomedData = [];
      jsonResult.tempo.forEach((item) => groomedData.push([item.song_title, item.artist.name, Number(item.tempo)]));

      if (groomedData.length) {
        setData(groomedData);
      }
    };

    fetchData();
  }, [selectedBpm]);

  return (
    <MetronomeWrapper>
      <Header />
      <Animation displayedValue={selectedBpm} />
      <ButtonGroup bpmData={bpmData} setSelectedBpm={setSelectedBpm} selectedBpm={selectedBpm} setShowMore={setShowMore} />
      <Details selectedBpm={selectedBpm} bpmData={bpmData} additionalData={data} showMore={showMore} setShowMore={setShowMore} />
    </MetronomeWrapper>
  );
};

export default Metronome;
