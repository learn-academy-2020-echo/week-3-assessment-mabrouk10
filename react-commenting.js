// ASSESSMENT 3: React Commenting Challenge

// Add comments to the React Dice Roller Challenge

// Explain the purpose and functionality of the code on the line DIRECTLY below the 10 comment tags


// src/App.js

import React, { Component } from 'react'
// 1) The code below is used to import the Dice and Log components inside of the react file. 
//It is also importing six different images as well
import Dice from './Dice'
import Log from './Log'

import dice from '../assets/dice.png'
import dice1 from '../assets/dice-1.png'
import dice2 from '../assets/dice-2.png'
import dice3 from '../assets/dice-3.png'
import dice4 from '../assets/dice-4.png'
import dice5 from '../assets/dice-5.png'
import dice6 from '../assets/dice-6.png'

class Board extends Component{
  // 2) The constructor and super are used to declare/intialize state. Every constructor should have a super called as well
  //in order to be able to pass down props where ever it is needed. 
  constructor(props){
    super(props)
    // 3) this.state is used in order to make changes to our react app. Whenever thhe state changes the whole app re-renders
    this.state = {
      rollImages: [dice1, dice2, dice3, dice4, dice5, dice6],
      currentPic: dice,
      diceLog: []
    }
  }

  handleRoll = () => {
    // 4) Destructing of rollImages and diceLog. Makes code cleaner and easier to track rather than typing this.state every time
    // you use those elements. 
    let { rollImages, diceLog } = this.state
    // 5) The below code is done to generate a random number
    let randomNum = Math.ceil(Math.random() * rollImages.length)
    let newRoll = rollImages[randomNum]
    // 6) Assigning that random number found to the new state. Which should trigger a re-render
    this.setState({ currentPic: newRoll, diceLog: [... diceLog, newRoll] })
  }

  // 7) This is where everything will be produced/rendered. This is what will pop up in the web app
  render(){
    const { currentPic, diceLog } = this.state
    return(
      <div id="board-container">
        {/* //8) The component Dice is called and rendered */}
        <Dice
          // 9) The function above will be triggered/intiated in the code below.
          roll={ this.handleRoll }
          currentPic={ currentPic }
        />
        <Log
          diceLog={ diceLog }
        />
      </div>
    )
  }
}

// 10) Export is done in order to export a file so it can be used in other programs/places.
//Exporting will allow accessibility by importing the exported file
export default Board
