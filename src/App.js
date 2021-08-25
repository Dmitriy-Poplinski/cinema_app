import {useState} from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import store from './redux/store'
import { Header, About, Footer, Today, Tommorow, MainPage, ModalDate, AppWrapper } from './componets/index.js'

const  App = () => {
  const [date, setDate] = useState(false)

  const redirectToMain = () => {
    setDate(true)
  }

  const redirectToDate = () => {
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
                {date ? <Redirect to="/" /> : <MainPage><ModalDate /></MainPage>}
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
