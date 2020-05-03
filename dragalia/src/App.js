import React from 'react';
import { StyledApp } from './styles/StyledApp';
import { Route, Switch } from 'react-router-dom';
import Header from './components/atoms/Header/Header';
import Loader from './components/atoms/Loader/Loader';
import Login from './components/pages/Login/Login';
import DragonsList from './components/pages/DragonsList/DragonsList';

function App() {
  return (
    <StyledApp>
      <Header />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dragons" component={DragonsList} />
      </Switch>
      <Loader />
    </StyledApp>
  );
}

export default App;
