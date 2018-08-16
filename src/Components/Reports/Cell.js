import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  ${({ headline }) => headline && `
    border-bottom: 3px solid #e7e7e7;
  `}
  ${({ dateColumn }) => dateColumn && `
    color: #930456;
    border-bottom: 3px solid #930456;
  `}
`;

export default class Cell extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    console.log(this.cell.offsetWidth);
  }

  render(){
    return(
      <Container {...this.props} innerRef={(input) => this.cell = input}>
        {this.props.children}
      </Container>
    )
  }
}
