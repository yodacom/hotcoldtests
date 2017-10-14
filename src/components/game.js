import React from 'react';
import{ Component } from 'react';
import { connect } from 'react-redux';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from '../containers/guess-list';
import { makeGuess, newGame } from '../actions/actions.js';

export class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  newGame() {
    this.props.dispatch(newGame())
  }

  guess(guess) {
    this.props.dispatch(makeGuess(guess));
  }

  render() {
    return (
      <div>
        <Header onNewGame={() => this.newGame()} />
        <GuessSection
          feedback={this.props.feedback}
          onGuess={guess => this.guess(guess)}
        />
        <GuessCount count={this.props.guesses.length} />
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
