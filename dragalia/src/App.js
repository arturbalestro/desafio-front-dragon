import React from 'react';
import { StyledApp } from './styles/StyledApp';
import Header from './components/Header';
import Button from './components/Button';
import Loader from './components/Loader';
import DragonsList from './components/DragonsList';

function App() {
  return (
    <StyledApp>
      <Header />
      <Button />
      <Loader />
      <DragonsList />
    </StyledApp>
  );
}

export default App;
