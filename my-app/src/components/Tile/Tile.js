import React, { Component } from "react";
import "./Tile.css";

class Tile extends Component{
    
  render(){
    
    const color = "player" + this.props.players.player
    return (
      <div className={color} onClick={this.clickCheck}>
        
      </div>
     )
  }
}

export default Tile;