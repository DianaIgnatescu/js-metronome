import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from '../../styles';

const StyledButton = styled.div`
  min-height: 35px;
  width: 84px;
  background: ${(props) => (props.selected === props.value ? styles.primaryTextColour : '#2d1c3f')};
  border: none;
  margin-bottom: 12px;
  color: ${(props) => (props.selected === props.value ? styles.backgroundColour : '#8eacff')};
  font-size: 1.4rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 8px;
  border-radius: 5px;
  box-shadow: 0px 1px 2px 0px #00000080;
  &:hover {
    cursor: pointer;
    background: ${(props) => (props.selected === props.value ? styles.primaryTextColour : '#2d1c3f')}cc;
  }
`;

const Button = ({ value, selected, handleClick }) => {
  const handleClickButton = (value) => {
    handleClick(value);
  };

  return (
    <StyledButton selected={selected} value={value} onClick={() => handleClickButton(value)}>
      {value} BPM
    </StyledButton>
  );
};

export default Button;

Button.propTypes = {
  value: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired
};
