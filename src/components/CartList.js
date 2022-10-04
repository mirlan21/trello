import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import GeneralModal from '../components/GeneralModal';
import DeleteModal from '../components/DeleteModal';
import pencil from '../images/pencil.png';

function CartList({ item, todos, setTodos }) {
  const [toDos, setInputTodos] = useState('');
  const [list, setList] = useState([]);

  // const [isShowListItem, setIsShowListItem] = useState(false);

  const changeInputValueHandler = (event) => {
    setInputTodos(event.target.value);
    // console.log(event.target.value);
  };
  const saveToDos = () => {
    if (!toDos) return;
    setList([
      ...list,
      {
        goal: toDos,
        id: Math.random(),
        comments: [],
      },
    ]);
    setInputTodos('');
  };
  const deleteToDoList = (id) => {
    const filtered = list.filter((elem) => elem.id !== id);
    setList(filtered);
  };

  const [inputValue, setInputValue] = useState({
    id: null,
    name: '',
  });
  const [isModalShow, setIsModalShow] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const inputHandler = (event) => {
    setInputValue({
      ...inputValue,
      name: event.target.value,
    });
  };

  const SaveValue = () => {
    const index = todos.findIndex((item) => item.id === inputValue.id);
    todos[index].toDoListName = inputValue.name;
    setIsShow(false);
    setTodos([...todos]);
    console.log(todos[index]);
  };

  const changeText = (id, name) => {
    setInputValue({
      id: id,
      name: name,
    });
    setIsShow(true);
  };
  console.log(isModalShow);

  return (
    <Card>
      <Container>
        {isShow ? (
          <div>
            <Input
              value={inputValue.name}
              onChange={inputHandler}
              type="text"
              name=""
              id=""
            />
            <ButtonSave onClick={SaveValue}>Save</ButtonSave>
          </div>
        ) : (
          <>
            <p
              style={{ color: 'whitesmoke' }}
              onClick={() => changeText(item.id, item.toDoListName)}
            >
              {item.toDoListName}
            </p>
            <ButtonDelete onClick={() => setIsModalShow(true)}>X</ButtonDelete>
          </>
        )}

        {isModalShow && (
          <GeneralModal onClose={setIsModalShow}>
            <DeleteModal />
          </GeneralModal>
        )}
      </Container>

      <div>
        {list.map((item) => (
          <>
            <Wrapper>
              <Items onClick={() => setIsModalShow((prev) => !prev)}>
                {' '}
                {item.goal}{' '}
              </Items>
              <div>
                <ButtonSave onClick={() => deleteToDoList(item.id)}>
                  X
                </ButtonSave>
                <PencilIcon src={pencil} alt="" />
              </div>
            </Wrapper>
          </>
        ))}
        <Input value={toDos} onChange={changeInputValueHandler} type="text" />
        <ButtonSave onClick={saveToDos}>Save</ButtonSave>
      </div>
    </Card>
  );
}

export default CartList;
const Card = styled.div`
  border: 1px solid whitesmoke;

  max-height: 100%;

  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
// const ContainerToDos = styled.div`

// `;

const Input = styled.input`
  border: none;
  background: hsl(0 0% 93%);
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  margin-right: 5px;
`;

const ButtonDelete = styled.button`
  background-color: #405cf5;
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 100%;
  width: 30px;
  height: 34px;
  padding: 0 10px;
`;
const ButtonSave = styled.button`
  background-color: #405cf5;
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 100%;
  height: 34px;
  padding: 0 10px;
  margin-right: 10px;
`;
const InputNoBorder = styled.input`
  border: none;
`;
const PencilIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;
const Items = styled.p`
  margin-top: 10px;
  color: whitesmoke;
`;
