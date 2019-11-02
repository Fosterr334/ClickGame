import React, { Component } from "react";
import Tile from "../Tile/Tile";
import Score from '../Score/Score';
import "./Board.css"
class Board extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x:0,
            tiles: Array(8).fill(null),
            board: [{ player: 0, clicked: false }, { player: 1, clicked: false }, { player: 2, clicked: false }, { player: 3, clicked: false }, { player: 4, clicked: false }, { player: 5, clicked: false }, { player: 6, clicked: false }, { player: 7, clicked: false }, { player: 8, clicked: false }, { player: 9, clicked: false }, { player: 10, clicked: false }, { player: 11, clicked: false },]
        }
    }
    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    renderTile(i) {
        console.log(`this is in render Tile${i}`);
        return (
            <Tile
                players={this.state.board[i]}
                clickCheck={this.clickCheck}
            />
        );
    }
    renderScore(){
        return(
            <Score
            x ={this.state.x} />
        )
    }
    clickCheck = (player) => {
        console.log("clicked!")
        console.log(this.state.board[player].player)
        console.log(this.state.board[player].clicked)
        console.log(`%c${this.state.x}`,'color: purple')
        if (this.state.board[player].clicked === true) {
            alert("Game Over")
        }
        else {
            this.state.board[player].clicked = true;
            this.setCurrentValue(player);
            
        }
        
    }
    setCurrentValue = (player) => {
        var tempX = this.state.x;
        tempX ++
        var tempBoard = this.state.board;
        this.shuffle(this.state.board);
        console.log({tempBoard})
        this.setState({board:tempBoard,x:tempX});
    }
    render() {
        return (
            <div>
                {this.renderScore()}
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