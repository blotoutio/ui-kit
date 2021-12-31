import styled from 'styled-components'

export const Layer = styled.div`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  display: flex;
  justify-content: space-between;
  padding: 20px 10px;
  align-items: center;
`

export const ColorBox = styled.span`
  height: 75px;
  width: 75px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  display: inline-block;
`

export const ChartBox = styled.div`
  height: auto;
  width: 1000px;
  border: 1px solid #ccc;
  float: left;
  margin: 60px 0 50px 50px;
`

export const ChartWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  text-align: center;
  justify-content: space-evenly;
`

export const ColorContainer = styled.div`
  float: left;
  margin: 10px 20px;
  width: 333px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.14);
`

export const CenteredDiv = styled.div`
  display: flex;
  height: 200px;
  justify-content: center;
  align-items: center;
`

export const HeadingValue = styled.h3`
  padding: 20px 20px;
  margin: 0;
  color: #000;
`

export const HLine = styled.hr`
  width: 100%;
  color: black;
`

export const ChartHeading = styled.h2`
  margin: 40px 0px 40px 50px;
`
