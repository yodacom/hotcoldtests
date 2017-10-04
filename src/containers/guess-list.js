import React from 'react';

import './guess-list.css';

export default class Guesses extends Component {
  renderGuesses() {
    return this.props.guesses.map(guess => (
      <li key={index}>
        {guess}
      </li>

    ));
  }
render(){
  return (
    <ul id="guessList" className="guessBox clearfix">
      {guesses}
    </ul>
  );
}


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
