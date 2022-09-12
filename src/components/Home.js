import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import image from '../images/user-512.webp';
import AddCardPanel from './AddCardPanel';
import CartList from './CartList';
import { toDos } from './Modal';

function Home() {
  const [todos, setTodos] = useState([...toDos]);
  const { user } = useSelector((state) => state.auth);

  console.log(user);
  return (
    <Body>
      <div>
        <Header>
          <Container>
            <ImageOfUser src={image} alt="" />
            <Email>{user?.email}Surpise</Email>
          </Container>
        </Header>
        <Main>
          {toDos.length !== 0 &&
            todos.map((item) => {
              return (
                <div>
                  <CartList
                    key={item.id}
                    item={item}
                    todos={todos}
                    setTodos={setTodos}
                  />
                </div>
              );
            })}
          <AddCardPanel todos={todos} setTodos={setTodos} />
        </Main>
      </div>
    </Body>
  );
}

export default Home;
const Body = styled.body`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
`;
const Header = styled.header`
  background-color: blue;
  height: 100px;
  border-bottom: 1px solid whitesmoke;
  background-image: linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%);
`;
const ImageOfUser = styled.img`
  /* border: 1px solid black; */
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;
// const container = styled.div`
// background-image: url('');
// `

const Main = styled.main`
  display: flex;
  height: 100vh;
  background-image: linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%);
`;
const Container = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const Email = styled.p`
  border: 1px solid;
  color: white; 
  height: 50px;
  display: flex;
  align-items: center;
  margin: 20px;
  border-radius: 5px;
  color: black;
  padding: 20px;
`;
