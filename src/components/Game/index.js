import React from 'react';
import Board from '../Board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      playerX: true
    }
  }

  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.playerX ? 'X' : 'O';
    this.setState({
      squares: squares,
      playerX: !this.state.playerX
    });
  }

  render() {
    const squares = this.state.squares;
    const winner = this.calculateWinner(squares);
    let status;

    if (winner) {
      status = `${winner} wins!`;
    } else {
      status = 'Next player: ' + (this.state.playerX ? 'X' : 'O');
    }

    return (
      <div className='game'>
        <Board
          squares={squares}
          onClick={i => this.handleClick(i)}
        />
        <div className='game-info'>
          <p className='game-status'>{status}</p>
        </div>
      </div>
    );
  }
}

export default Game;
