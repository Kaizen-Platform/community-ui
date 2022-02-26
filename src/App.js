import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TopNav from "./components/TopNav/TopNav";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Employees from './pages/Employees';
import Ideas from './pages/Ideas';
import Support from './pages/Support';
import { progress } from './pages/progress';

import { BrowserRouter } from 'react-router-dom';
import admin from './pages/admin';

function App() {
  return (
    <div className="App">
      

      <Router>
      <TopNav />
      
      
        <Switch>
        
          
          <Route path='/' exact component={Home} />
          <Route path='/employees' component={Employees} />
          <Route path='/ideas' component={Ideas} />
          <Route path='/support' component={Support} />
          <Route path='/Admin' component={admin} />
          <Route path='/progress' component={progress} />
        </Switch>
      </Router>
      
      </div>
  );
}

export default App;
