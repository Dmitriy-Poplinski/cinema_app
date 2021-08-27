import styled from 'styled-components'

import { Phone } from './style.variables'

export const HeaderLogo = styled.div`
  margin-left: 20px;
  font-size: 30px;
  text-align: center;
  @media (max-width: ${Phone}) {
    font-size: 16px;
  }
`

export const HeaderMenuWrapper = styled.div`
  display: flex;
  font-size: 20px;
  margin-left: auto;
  align-items: center;
`

export const HeaderMenuItem = styled.div`
  padding: 20px;
  cursor: pointer;
`
