import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../components/guess-list.css';

class Guesses extends Component {
  renderGuesses() {
    return this.props.guesses.map((guess, index) => (
      <li key={index} className="guessBox clearfix">
        {guess}
      </li>
    ));
  }

  render() {
    return (
      <ul id="guessList" className="guessBox clearfix">
        {this.renderGuesses()}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    guesses: state.guesses,
  };
}

export default connect(mapStateToProps)(Guesses);

// export default function GuessList(props) {
//   const guesses = props.guesses.map((guess, index) => (
//     <li key={index}>
//       {guess}
//     </li>
//   ));

//   return (
//     <ul id="guessList" className="guessBox clearfix">
//       {guesses}
//     </ul>
//   );
// }
