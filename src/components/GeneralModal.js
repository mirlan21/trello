import React, { Children } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';


const modal = document.getElementById('modal')
const GeneralModal = ({ onClose,children}) => {
  return (
     
    createPortal(<BackDrop onClick={() => onClose(false)}>{children}</BackDrop>, modal)
  );
};

export default GeneralModal;
const BackDrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #100e0e8b;
  z-index: 2;
`;
