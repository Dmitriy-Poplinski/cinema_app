import styled, { createGlobalStyle } from 'styled-components'

import { 
  CommonLaptopRowWrapper,
  CommonMobileAppWrapper 
} from './style.variables'

export const Global = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  text-decoration: none;
  color: white;
}
`

export const RowWrapper = styled.div`
  margin-top: 100px;
  @media (max-width: ${CommonLaptopRowWrapper}) {
      margin: 100px auto;
      width: 400px;
      img {
          width: 360px;
      }
  }
`

export const AppWrapper = styled.div`
  position: relative;
  height: 100%;
  @media (max-width: ${CommonMobileAppWrapper}) {
    width: 400px
  }
`
