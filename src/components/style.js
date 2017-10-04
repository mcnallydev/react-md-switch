import styled, { keyframes } from 'styled-components';

const Div = styled.div`
  width: 38px;
  height: auto;
  position: relative;
  overflow: hidden;
  padding: 5px;
`;

const Label = styled.label`
  position: relative;
  display: block;
  height: 14px;
  width: 34px;
  background: #898989;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:after {
    position: absolute;
  	left: -2px;
  	top: -3px;
  	display: block;
  	width: 20px;
  	height: 20px;
  	border-radius: 100px;
  	background: #fff;
  	    box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
  	content: '';
  	transition: all 0.2s;
  }
`;

const Input = styled.input`
  display: none;
  &:checked ~ label {
    background: #88B6E4;
    &:after {
      left: 20px;
      background: #0C59BB;
    }
  }
  &:disabled ~ label {
    background: #D5D5D5;
    pointer-events: none;
    &:after {
      background: #BCBDBC;
    }
  }
`;

export { Div, Input, Label };
