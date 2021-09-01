import { useState } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import { Provider } from 'react-redux'

import { 
  Header, 
  About, 
  Footer, 
  Today, 
  Tommorow, 
  MainPage, 
  ModalDate 
} from './componets'
import { AppWrapper } from './styled/Common.style'
import store from './redux/store'

const App: React.FC = () => {
  const [date, setDate] = useState(false)

  const redirectToMain = (): void => {
    setDate(true)
  }

  const redirectToDate = (): void => {
    setDate(false)
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
          <AppWrapper>
            <Row><Header redirectToMain={redirectToMain} redirectToDate={redirectToDate}/></Row>
            <Row>
              <Route exact path='/' component={MainPage}/> 
              <Route exact path='/about' component={About}/>
              <Route exact path='/today' component={Today}/>
              <Route exact path='/tommorow' component={Tommorow}/>
              <Route exact path='/date'> 
                {date ? <Redirect to="/" /> : <MainPage><ModalDate show={false} handleClose={() => {}}/></MainPage>}
              </Route>
            </Row>
            <Row>
              <Footer />
            </Row>
          </AppWrapper>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
