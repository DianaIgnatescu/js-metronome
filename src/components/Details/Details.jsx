import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from '../../styles';

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  text-align: center;
`;

const DetailsTitle = styled.h6`
  color: ${styles.primaryTextColour};
  font-weight: ${styles.fontWeightBlack};
  font-size: 1.4rem;
  letter-spacing: 0.78px;
  font-family: ${styles.fontFamily};
`;

const DetailsItemText = styled.p`
  color: #fff;
  font-weight: ${styles.fontWeightRegular};
  font-size: 1.4rem;
  letter-spacing: 0.78px;
  padding-top: 8px;
  font-family: ${styles.fontFamily};
  font-weight: ${styles.fontWeightBlack};
`;

const Details = ({ bpmArray, selectedBpm }) => {
  return (
    <DetailsWrapper>
      <DetailsTitle>Songs that use this BPM</DetailsTitle>
      {bpmArray
        .filter((item) => selectedBpm === item[2])
        .map((item, i) => (
          <DetailsItemText key={`${item[0]}-${i}`}>
            {item[0]} ({item[1]})
          </DetailsItemText>
        ))}
    </DetailsWrapper>
  );
};

Details.propTypes = {
  bpmArray: PropTypes.array.isRequired,
  selectedBpm: PropTypes.number.isRequired
};

export default Details;
