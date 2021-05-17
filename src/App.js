import './App.css';
import Header from './components/header/Header';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import TestSite from './components/header/TestSite';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './components/main/Main'


function App() {
  return (
    <div className="container-fluid bg-light">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact/>
          <Route path="/test" component={TestSite}/>
        </Switch>
        <Main/>
      </Router>
      
    </div>
  );
}

export default App;
