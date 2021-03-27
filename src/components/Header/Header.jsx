import React from 'react';
import styled from 'styled-components';
import styles from '../../styles';

const Title = styled.h1`
  text-transform: uppercase;
  color: ${styles.primaryTextColour};
  font-size: 1.8rem;
  font-family: ${styles.fontFamily};
`;

const Header = () => {
  return <Title>Digital Metronome</Title>;
};

export default Header;
