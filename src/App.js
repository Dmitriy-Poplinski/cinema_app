import {useState} from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Row } from 'react-bootstrap'

import { 
  Header, 
  About, 
  Footer, 
  Today, 
  Tommorow, 
  MainPage, 
  ModalDate 
} from './componets/'
import { AppWrapper } from './styled/Common.style'

const  App = () => {
  const [date, setDate] = useState(false)

  const redirectToMain = () => {
    setDate(true)
  }

  const redirectToDate = () => {
    setDate(false)
  }

  return (
      <BrowserRouter>
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
      </BrowserRouter>
  );
}

export default App;
