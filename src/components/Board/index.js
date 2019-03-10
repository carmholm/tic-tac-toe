import React from 'react';
import Square from '../Square';

class Board extends React.Component {
  renderSquare(i, position) {
    return (
      <Square
        position={position}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div className="game-board">
        <div className="game-square">
          {this.renderSquare(0, 'top left')}
          {this.renderSquare(1, 'top')}
          {this.renderSquare(2, 'top right')}
          {this.renderSquare(3, 'left')}
          {this.renderSquare(4)}
          {this.renderSquare(5, 'right')}
          {this.renderSquare(6, 'bottom left')}
          {this.renderSquare(7, 'bottom')}
          {this.renderSquare(8, 'bottom right')}
        </div>
      </div>
    );
  }
}

export default Board;
