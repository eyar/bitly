import React from 'react'
import styled from 'styled-components';

const Container = styled.form`
  @media (max-width: 800px) {
    width: 100%;
  }
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  direction: rtl;
`;

const Input = styled.input`
  direction: rtl;
  color: #930456;
  border: none;
  background: transparent;
  margin-top: 20px;
  border-bottom: 3px solid #930456;
  width: 97%;
  font-size: 1rem;
  margin-right: 5px;
`;

const Button = styled.button`
  direction: rtl;
  color: white;
  background-color: #930456;
  border: none;
  margin-top: 10px;
  width: 100px;
  font-size: 1rem;
  margin-top: 20px;
  margin-right: 5px;
`;

const Answer = styled.div`
  border: none;
  background: transparent;
  border-bottom: 3px solid #930456;
  display: inline-block;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: 0;
  font-size: 1rem;
  margin-top: 40px;
  margin-right: 5px;
`;

class Form extends React.Component {
  render(){
    return(
      <Container>
        <Input placeholder="כתובת URL"/>
        <Button>קצר לי</Button>
        <Answer>http://walla.news/adg45</Answer>
      </Container>
    )
  }
}

export default Form
