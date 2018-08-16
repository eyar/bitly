import React from 'react'
import styled from 'styled-components';
import Form from '../Form/Form';
import Reports from '../Reports/Reports';

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
`;

const Purple = styled.div`
  background-color: #930456;
`;

const H1 = styled.div`
  direction: rtl;
  color: white;
  margin-top: 0;
  padding: 10px;
  font-size: 2rem;
`;

const Nav = styled.div`
  @media (max-width: 800px) {
    width: 100%;
  }
  width: 800px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Text = styled.div`
  display: flex;
  flex-direction: row;
  direction: rtl;
  font-size: 1.5rem;
`;

const NavButton = styled.a`
  margin-right: 5px;
  margin-left: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 5px;
  color: black;
  cursor: pointer;
  ${({ active }) => active && `
    border-bottom: 3px solid #930456;
  `}
`;

const Spacer = styled.div`
  background-color: #D4D4D4;
  height:2px;
  width: 100%;
  margin-top: -2px;
  margin-left: auto;
  margin-right: auto;
`;

const ReportsContainer = styled.div`
  width: 800px;
`;

class Index extends React.Component {
  constructor() {
    super()
    this.state = {active: 'form'}
  }

  componentDidMount(){
    document.title = "וואלה! קיצורי URL"
  }

  handleClick = (path) => {
    this.setState({active: path});
  }

  render(){
    return(
      <Container>
        <Purple>
          <H1>וואלה! קיצורי URL</H1>
        </Purple>
        <Nav>
          <Text>
            <NavButton active={this.state.active === 'form'}
                       onClick={() => this.handleClick('form')}>
                       URL מקוצר
            </NavButton>
            <NavButton active={this.state.active === 'reports'}
                       onClick={() => this.handleClick('reports')}>
                       דוחות
            </NavButton>
          </Text>
          <Spacer/>
        </Nav>
        {this.state.active === 'form' && <Form/>}
        {this.state.active === 'reports' && <Reports/>}
      </Container>
    )
  }
}

export default Index
