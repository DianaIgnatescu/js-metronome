import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import styles from '../../styles';

const gradient = keyframes`
0% {
  box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.2)
}
100% {
  box-shadow: 0 0 0 30px rgba(51, 217, 178, 0)
}
`;

const animation = (props) => css`
  ${gradient} ${props.bpmInMs}s infinite;
`;

const AnimationWrapper = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimationText = styled.h6`
  color: ${styles.backgroundColour};
  font-size: 2.4rem;
  position: absolute;
  letter-spacing: 1.33px;
  opacity: 0.5;
  font-family: ${styles.fontFamily};
`;

const AnimationWrapperSmall = styled.div`
  width: 132px;
  height: 132px;
  background: #64bca4;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 7px 2px rgba(100, 188, 164, 0.31);
`;

const AnimationWrapperMedium = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${animation};
  height: 132px;
  width: 132px;
  border-radius: 50%;
`;

const Animation = ({ displayedValue }) => {
  const convertBpmInMs = (value) => {
    return 60000 / value / 1000;
  };

  const bpmInMs = convertBpmInMs(displayedValue);

  return (
    <AnimationWrapper>
      <AnimationWrapperMedium bpmInMs={bpmInMs}>
        <AnimationWrapperSmall />
      </AnimationWrapperMedium>
      <AnimationText>{displayedValue}</AnimationText>
    </AnimationWrapper>
  );
};

Animation.propTypes = {
  displayedValue: PropTypes.number.isRequired
};

export default Animation;
