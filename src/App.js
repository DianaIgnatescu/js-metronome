import React from 'react';
import Metronome from './containers/Metronome';
import styled from 'styled-components';
import styles from './styles';

const AppWrapper = styled.div`
  background: ${styles.backgroundColour};
  display: flex;
  height: inherit;
`;

const App = () => {
  return (
    <AppWrapper>
      <Metronome />
    </AppWrapper>
  );
};

export default App;
