import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TopNav from "./components/TopNav/TopNav";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Employees from './pages/Employees';
import Ideas from './pages/Ideas';
import Support from './pages/Support';

function App() {
  return (
    <div className="App">
      

      <Router>
      <TopNav />
      
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/employees' component={Employees} />
          <Route path='/ideas' component={Ideas} />
          <Route path='/' component={Support} />
        </Switch>
      </Router>
    
      </div>
  );
}

export default App;
