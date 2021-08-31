import styled from 'styled-components'

import { 
  PosterBackgroundColor, 
  PosterMobileColumn, 
  PosterMobileImage 
} from './style.variables'

export const PosterStyledColumn = styled.div`
  width: 400px;
  height: 600px;
  margin-right: auto;
  margin-left: auto;
  background-color: ${PosterBackgroundColor};
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  margin-top: 40px;
  @media (max-width: ${PosterMobileColumn}) {
    width: 100%;
  }
`

export const PosterImg = styled.img`
  width: 100%;
  height: 400px;
  margin-top: 10px;
  border: none;
  outline: none;
  @media (max-width: ${PosterMobileImage}) {
    margin: 0;
    width: 300px;
    heigth: 400px;
  }
`

export const PosterStyledButton = styled.div`
  padding-top: 50px;
  padding-left: 20%;
  width: 300px;
  button {
    width: 100%;
  }
`

export const PosterTimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  font-size: 25px;
`
