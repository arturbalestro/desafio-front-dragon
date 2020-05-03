import React from 'react';
import { StyledApp } from './styles/StyledApp';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Loader from './components/Loader';
import DragonsList from './components/DragonsList';

function App() {
  return (
    <StyledApp>
      <Header />
      <Switch>
        <Route path="/dragons" component={DragonsList} />
        <Route path="/" exact component={Login} />
      </Switch>
      <Loader />
    </StyledApp>
  );
}

export default App;
