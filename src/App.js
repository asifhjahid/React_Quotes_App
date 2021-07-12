import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from './component/Context/Global';
import Create from './component/Create/Create';
import Details from './component/Details/Details';
import Edit from './component/Edit/Edit';
import Home from './component/Home/Home';
import Delete from './component/Delete/Delete';
import './App.css'

export default function App() {
  return (
    <GlobalProvider> 
      <div className="app">
        <Router>
          <Switch>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/read/:id">
              <Details />
            </Route>
            <Route path="/edit/:id">

              <Edit />
            </Route>
            <Route path="/delete/:id">
              <Delete />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  )
}
