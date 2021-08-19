import { Header } from './componets/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { About } from './componets/About/About';
import { Footer } from './componets/Footer/Footer';
import styled from 'styled-components'
import {Container, Row} from 'react-bootstrap'
import { Today } from './componets/Today/Today';

const AppWrapper = styled.div`
position: relative;
height: 1500px;
// display: grid;
// flex-direction: column;
// justify-content: space-between;
`

const Main = styled.div`
// padding-top: 100px;
`

function App() {
  return (
    <BrowserRouter>
      <Container>
        <AppWrapper>
          <Row><Header /></Row>
          <Row>
            <Route exact path='/' render={() => <Main>Cinema App</Main>}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/today' component={Today}/>
          </Row>
          <Row>
            <Footer />
          </Row>
        </AppWrapper>
      </Container>
    </BrowserRouter>
  );
}

export default App;
