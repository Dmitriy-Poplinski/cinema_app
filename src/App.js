import { Header } from './componets/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { About } from './componets/About/About';
import { Footer } from './componets/Footer/Footer';
import styled from 'styled-components'
import {Container, Row} from 'react-bootstrap'
import { Today } from './componets/Today/Today';
import { Tommorow } from './componets/Tommorow/Tommorow';
import { MainPage } from './componets/MainPage/MainPage';

const AppWrapper = styled.div`
position: relative;
height: 1500px;
`

function App() {
  return (
    <BrowserRouter>
      <Container>
        <AppWrapper>
          <Row><Header /></Row>
          <Row>
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/today' component={Today}/>
            <Route exact path='/tommorow' component={Tommorow}/>
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
