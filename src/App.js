import './App.css';
import Header from './components/header/Header';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import TestSite from './components/header/TestSite';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './components/main/Main'
import Update from './components/form/Update';


function App() {
  return (
    <div className="container-fluid bg-light">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" component={Main} exact/>
          <Route path="/test" component={TestSite}/>
          <Route path="/update" component={Update}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
