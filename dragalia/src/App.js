import React from 'react';
import './styles/App.css';
import DragonsList from './components/DragonsList';
import Button from './components/Button';
import Loading from './components/Loading';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Dragalia!</h1>
        <h2>Here you will find information about the most famous dragons in the world.</h2>
        <Button />
        <Loading />
        <DragonsList />
      </header>
    </div>
  );
}

export default App;
