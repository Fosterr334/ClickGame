import React, { Component } from "react";
import "./Score.css";

class Score extends Component{
  render(){
    var num =this.props.x
    console.log(`%c${num}`,'color: orange')
    return (
      <div className="scoreboard">
        <h1>Score {num}</h1>
      </div>
     )
  }
}

export default Score;