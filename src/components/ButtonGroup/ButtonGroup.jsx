import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button/Button';

const ButtonGroupWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 300px;
`;

const ButtonGroup = ({ bpmData, setSelectedBpm, selectedBpm, setShowMore }) => {
  let bpmValues = [];
  // Extract bpmValues into a new array
  if (bpmData) {
    bpmData.forEach((dataItem) => bpmValues.push(dataItem[2]));
  }

  // Only store unique bpm values
  const uniqueBpmValues = [...new Set(bpmValues)];

  return (
    <ButtonGroupWrapper>
      {uniqueBpmValues.map((item, i) => (
        <Button key={`${item}-${i}`} value={item} handleClick={setSelectedBpm} selected={selectedBpm} setShowMore={setShowMore} />
      ))}
    </ButtonGroupWrapper>
  );
};

ButtonGroup.propTypes = {
  bpmData: PropTypes.array.isRequired,
  setSelectedBpm: PropTypes.func.isRequired,
  selectedBpm: PropTypes.number.isRequired,
  setShowMore: PropTypes.func.isRequired
};

export default ButtonGroup;
