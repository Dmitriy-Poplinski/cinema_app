import styled from 'styled-components'

import { Tablet } from './style.variables'

export const MainPageTextWrapper = styled.span`
  @media (max-width: ${Tablet}) {
    font-size: 16px;
  }
`

export const MainPageImg = styled.img`
  height: 900px;
  margin: 0 auto;
`

export const MainPageParagraph = styled.p`
  margin-right: auto;
  margin-left: auto;
  width: 40%;
  padding: 20px;
  font-size: 25px;
  background-color: #ccc;
  margin-top: 20px;
`

export const MainPageButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    width: 40%;
    font-size: 30px;
    padding: 20px;
  }
`

export const MainPageDetailsWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 90%;
  padding: 50px;
  font-size: 25px;
  background-color: #ccc;
  margin-top: 20px;
`