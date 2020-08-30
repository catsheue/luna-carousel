import React from 'react';
import Carousel from "./components/Carousel";
import './App.css';

function App() {
  return (
    <div className="App">
      <Carousel height={'300px'}>
          <img src="https://i.imgur.com/FnmRIGi.jpeg" alt=""/>
          <img src="https://i.imgur.com/FO5eMAc.jpeg" alt=""/>
          <img src="https://i.imgur.com/3rYHhEu.jpeg" alt=""/>
      </Carousel>
    </div>
  );
}

export default App;
