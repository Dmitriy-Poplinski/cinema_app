import { Header } from './componets/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { About } from './componets/About/About';
import { Footer } from './componets/Footer/Footer';
import styled from 'styled-components'

const AppWrapper = styled.div`
height: 2000px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

const Main = styled.div`
padding-top: 100px;
`

function App() {
  return (
    <BrowserRouter>
        <AppWrapper>
          <Header />
          <Route exact path='/' render={() => <Main>Cinema App</Main>}/>
          <Route exact path='/about' component={About}/>
          <Footer />
        </AppWrapper>
      </BrowserRouter>
  );
}

export default App;
