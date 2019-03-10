import React from 'react';
import Square from '../Square';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      playerX: true
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.playerX ? 'X' : 'O';
    
    this.setState({
      squares: squares,
      playerX: !this.state.playerX
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status = `Next player: ${this.state.playerX ? 'X' : 'O'}`;

    return (
      <div className="game-board">
        <p className="game-status">{status}</p>
        <div className="game-square">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
