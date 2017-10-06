import React from 'react';
import{ Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from '../containers/guess-list';
import { makeGuess } from '../actions/actions.js';

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.floor(Math.random() * 100) + 1,
    };
  }

  newGame() {
    this.setState({
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.floor(Math.random() * 100) + 1,
    });
  }

  guess(guess) {
    this.props.dispatch(makeGuess(guess));
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({
        feedback: 'Please enter a valid number',
      });
      return;
    }

    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'You got it!';
    }

    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess],
    });
  }

  render() {
    return (
      <div>
        <Header onNewGame={() => this.newGame()} />
        <GuessSection
          feedback={this.state.feedback}
          onGuess={guess => this.guess(guess)}
        />
        <GuessCount count={this.state.guesses.length} />
        <GuessList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(Game);
