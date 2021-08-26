import styled from 'styled-components'

import { HeaderLogoPhoneFontSize } from './style.variables'

export const HeaderLogo = styled.div`
margin-left: 20px;
font-size: 30px;
text-align: center;
@media (max-width: 320px) {
    font-size: ${HeaderLogoPhoneFontSize};
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