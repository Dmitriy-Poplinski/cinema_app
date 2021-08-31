import styled from 'styled-components'
import { FooterTextColor, FooterBackgroundColor } from './style.variables'

export const FooterWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
`

export const FooterInner = styled.div`
  height: 100px;
  background-color: ${FooterBackgroundColor};
  color: ${FooterTextColor};
  font-size: 28px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FooterCopy = styled.span`
  margin: 50px auto;
`
