import React, { useState } from 'react';
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
  const [selectedBpm, setSelectedBpm] = useState(74);

  return (
    <MetronomeWrapper>
      <Header />
      <Animation displayedValue={selectedBpm} />
      <ButtonGroup bpmData={bpmData} setSelectedBpm={setSelectedBpm} selectedBpm={selectedBpm} />
      <Details selectedBpm={selectedBpm} bpmArray={bpmData} />
    </MetronomeWrapper>
  );
};

export default Metronome;
