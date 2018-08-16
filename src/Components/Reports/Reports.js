import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  @media (max-width: 800px) {
    width: 100%;
  }
  width: 800px;
  margin-left: auto;
  margin-right: auto;
  direction: rtl;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;
  ${({ headline }) => headline && `
    margin: 20px auto;
  `}
`;

const Cell = styled.div.attrs({
  width: props => props.width,
})`
  margin: 0 auto;
  text-align: center;
  overflow-wrap: break-word;
  ${({ headline }) => headline && `
    border-bottom: 3px solid #e7e7e7;
  `}
  ${({ date }) => date && `
    color: #930456;
    width: 15%;
    border-color: #930456;
  `}
  ${({ sender }) => sender && `
    width: 11.25%;
  `}
  ${({ urlOrig }) => urlOrig && `
    width: 33.75%;
  `}
  ${({ urlShort }) => urlShort && `
    width:25%;
  `}
  ${({ clicks }) => clicks && `
    width: 11%;
  `}
`;

export default class Reports extends React.Component {
  constructor(){
    super();
  }

  render(){
    return(
      <Container>
        <Line>
          <Cell headline date>תאריך</Cell>
          <Cell headline sender>שולח</Cell>
          <Cell headline urlOrig>URL מקורי</Cell>
          <Cell headline urlShort>URL מקוצר</Cell>
          <Cell headline clicks>clicks</Cell>
        </Line>
        {
          ([1,1,1,1,1]).map((line, key) => {
            return (
              <Line key={key}>
                <Cell date>24.1.17</Cell>
                <Cell sender>oleg_pu</Cell>
                <Cell urlOrig>http://nick.walla.co.il/?w=//2788103</Cell>
                <Cell urlShort>http://walla.news/XXXXX</Cell>
                <Cell clicks>42</Cell>
              </Line>
            )
          })
        }
      </Container>
    )
  }
}
