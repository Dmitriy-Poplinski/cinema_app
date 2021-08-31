import styled from 'styled-components'

import { 
  MainPageTabletTitleWrapper, 
  MainPageMobileTitleWrapper 
} from './style.variables';

export const MainPageTitleWrapper = styled.div`
  margin-top: 80px;
  text-align: center;
  font-size: 40px;
  @media (max-width: ${MainPageTabletTitleWrapper}) {
    margin-top: 50px;
  }
  @media (max-width: ${MainPageMobileTitleWrapper}) {
    margin-top: 30px;
  }
`

export const InnerContainerStyle = styled.div`
  padding-top: 50px;
`
