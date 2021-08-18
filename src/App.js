import './App.css';
import { Header } from './componets/Header/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { About } from './componets/About/About';
import { Footer } from './componets/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path='/' render={() => <div className='content'>Cinema App</div>}/>
          <Route exact path='/about' component={About}/>
          <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
