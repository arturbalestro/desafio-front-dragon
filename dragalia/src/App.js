import React from 'react';
import { StyledApp } from './styles/StyledApp.js';
import { StyledHeader } from './styles/StyledHeader.js';
import DragonsList from './components/DragonsList';
import Button from './components/Button';
import Loading from './components/Loading';

function App() {
  return (
    <StyledApp>
      <StyledHeader>
        <h1>Welcome to Dragalia!</h1>
        <h3>Here you will find information about the most famous dragons in the world.</h3>
      </StyledHeader>
      <Button />
      <Loading />
      <DragonsList />
    </StyledApp>
  );
}

export default App;
