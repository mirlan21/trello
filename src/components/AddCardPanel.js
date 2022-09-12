import React, { useState } from 'react'
import styled from 'styled-components'

function AddCardPanel({todos, setTodos}) {
    const [inputValue , setInputValue] = useState('')

    const changeInputHandler = (event)=> {
        setInputValue(event.target.value)
    }

    const submitHandler = ()=> {
      if(!inputValue)return
        const newObject =  {
            toDoListName: inputValue,
            id: Math.random(),
            list: []
        }
        setTodos([...todos, newObject])
        setInputValue('')
    }
  return (
    <Container>
      <Input value={inputValue} onChange={changeInputHandler} type="text" name="" id="" />
      <ButtonSave onClick={submitHandler}>Save</ButtonSave>
      
    </Container>
  )
}

export default AddCardPanel
const ButtonSave = styled.button`
background-color: #405cf5;
  border-radius: 6px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 100%;
  height: 34px;
  padding: 0 10px;
`

const Container = styled.div`
margin: 10px;
`

const Input = styled.input`
  border: none;
  background: hsl(0 0% 93%);
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
`;