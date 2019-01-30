import React, { Component } from 'react';

import './App.css';


import DrumPad from './components/DrumPad/DrumPad';

import studioBackground from './assets/img/studio.jpg'

import kick1 from './assets/sounds/Kick 7.wav';

const sounds = {
  kick1,
}

class App extends Component {

  playSound = (sound, e) => {
    // sound.play();
    console.log(sound);
  }


  render() {
    return (
      <div className="App">
        <div className="background-container">
          <img  src={studioBackground} alt=""/>
          <div className="background-overlay" />
        </div>

        <div className="drumPads-container">
            <DrumPad keyName="Q" sound={sounds.kick1} playSound={this.playSound}/>
          </div>
      </div>
    );
  }
}

export default App;
