import React, { Component } from "react";
import "./Tile.css";

class Tile extends Component{
    
  render(){
    console.log("inside Tile")
    console.log(this.props.players.player)
    const color = "player" + this.props.players.player
    return (
      <div className={color} onClick={() => this.props.clickCheck(this.props.players.player)}>
        
      </div>
     )
  }
}

export default Tile;