import React, { Component } from "react";
import Tile from "../Tile/Tile";
import "./Board.css"
class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: "",
            tiles: Array(8).fill(null),
            board: [{ player: 0, clicked: false }, { player: 1, clicked: false }, { player: 2, clicked: false }, { player: 3, clicked: false }, { player: 4, clicked: false }, { player: 5, clicked: false }, { player: 6, clicked: false }, { player: 7, clicked: false }, { player: 8, clicked: false }, { player: 9, clicked: false }, { player: 10, clicked: false }, { player: 11, clicked: false },]
        }
    }
    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
    renderTile(i) {
        return (
            <Tile
                players={this.state.board[i]}
            />
        );
    }
    clickCheck = () =>{
       if (this.state.board.clicked === true){
           alert("Game Over")
       }
       else{
           this.state.board.clicked = true;
       }
       this.setCurrentValue();
    }
    boardShuffle = () => {
        var tempBoard = this.state.board
        return this.shuffle(tempBoard);
    }
    setCurrentValue = () => {
        var tempBoard = this.boardShuffle; 
        this.setState({board:tempBoard});
    }
    render() {
        return (
            <div>
                {/* <div className="status">{status}</div> */}
                <div className="row">
                    <div className="col s4">
                        {this.renderTile(this.state.board[0].player)}
                    </div>
                    <div className="col s4">
                        {this.renderTile(this.state.board[1].player)}
                    </div>
                    <div className="col s4">
                        {this.renderTile(this.state.board[2].player)}
                    </div>
                </div>
                <div className="row">
                    <div className="col s4">
                        {this.renderTile(this.state.board[3].player)}
                    </div>
                    <div className="col s4">
                        {this.renderTile(this.state.board[4].player)}
                    </div>
                </div>
                <div className="row">
                    <div className="col s4">
                        {this.renderTile(this.state.board[5].player)}
                    </div>
                    <div className="col s4">
                        {this.renderTile(this.state.board[6].player)}
                    </div>
                    <div className="col s4">
                        {this.renderTile(this.state.board[7].player)}
                    </div>
                </div>
                <div className="row">
                    <div className="col s4">
                        {this.renderTile(this.state.board[8].player)}
                    </div>
                    <div className="col s4">
                        {this.renderTile(this.state.board[9].player)}
                    </div>
                    <div className="col s4">
                        {this.renderTile(this.state.board[10].player)}
                    </div>
                    <div className="col s4">
                        {this.renderTile(this.state.board[11].player)}
                    </div>
                </div>
            </div>
        )
    }
}
export default Board;