import React from 'react';
import styled from 'styled-components';

const DeleteModal = ({ id, onOpen, onClose }) => {
  return (
    <Container>
      <div>
        <h2>Вы уверены удалить?</h2>
        <DeleteWrapper>
          <Button>delete</Button>
          <Button>cancel</Button>
        </DeleteWrapper>
      </div>
    </Container>
  );
};

export default DeleteModal;
const Container = styled.div`
  width: 300px;
  height: 300px;
  background-color: aqua;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const DeleteWrapper = styled.div`
display: flex;
justify-content: space-around
;
`;
const Button = styled.button`
 background-color: #405cf5;
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 100%;
  height: 34px;
  padding: 0 10px;

`