import './App.css';
import Header from './components/header/Header';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import TestSite from './components/header/TestSite';
import 'bootstrap/dist/css/bootstrap.min.css'
import Main from './components/main/Main'
import Update from './components/form/Update';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import {Status,Category,Person} from './components/form/Add';

function App() {
  return (
    <div className="container-fluid bg-light">
      <Router>
        <Header/>
        <Switch>
          <ProtectedRoute path="/" component={Main} exact/>
          <ProtectedRoute path="/test" component={TestSite}/>
          <ProtectedRoute path="/update/:id" component={Update}/>
          <ProtectedRoute path="/update" component={Update}/>
          <ProtectedRoute path="/status" component={Status}/>
          <ProtectedRoute path="/category" component={Category}/>
          <ProtectedRoute path="/person" component={Person}/>
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
