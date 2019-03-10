import React from 'react';
import Board from '../Board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
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
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.playerX ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      playerX: !this.state.playerX,
    });
  }

  undo() {
    if (this.state.stepNumber == 0) return;
    const lastStep = this.state.stepNumber - 1 ;
    this.setState({
      stepNumber: lastStep,
      playerX: (lastStep % 2) === 0
    })
  }

  newGame() {
    this.setState({
      stepNumber: 0,
      playerX: true
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    let status;
    if (winner) {
      status = `${winner} WINS!`;
    } else {
      status = 'NEXT PLAYER: ' + (this.state.playerX ? 'X' : 'O');
    }

    return (
      <div className='game'>
        <p className='game-status'>{status}</p>
        <Board
          squares={current.squares}
          onClick={i => this.handleClick(i)}
        />
        <div className='game-controls'>
          <button className='game-button' onClick={() => this.newGame()}>New Game</button>
          <button className='game-button' disabled={this.state.stepNumber === 0 || winner} onClick={() => this.undo()}>Undo</button>
        </div>
      </div>
    );
  }
}

export default Game;
