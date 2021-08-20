import {useState} from 'react'
import { Header } from './componets/Header/Header';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { About } from './componets/About/About';
import { Footer } from './componets/Footer/Footer';
import styled from 'styled-components'
import {Container, Row} from 'react-bootstrap'
import { Today } from './componets/Today/Today';
import { Tommorow } from './componets/Tommorow/Tommorow';
import { MainPage } from './componets/MainPage/MainPage';
import { ModalDate } from './componets/ModalDate/ModalDate';

const AppWrapper = styled.div`
position: relative;
height: 100%;
`

function App() {
  const [date, setDate] = useState(false)

  function redirectToMain () {
    setDate(true)
  }

  function redirectToDate () {
    setDate(false)
  }

  return (
    <BrowserRouter>
      <Container>
        <AppWrapper>
          <Row><Header redirectToMain={redirectToMain} redirectToDate={redirectToDate}/></Row>
          <Row>
            <Route exact path='/' component={MainPage}/> 
            <Route exact path='/about' component={About}/>
            <Route exact path='/today' component={Today}/>
            <Route exact path='/tommorow' component={Tommorow}/>
            <Route exact path='/date'> 
              {date ? <Redirect to="/" /> : <MainPage><ModalDate /></MainPage>}
            </Route>
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
