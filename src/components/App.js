import React, { Component } from 'react'
import styles from './App.scss'
import BoxItem from './BoxItem'

import images from '../images.json'

class App extends Component {

  constructor () {
    super()
    this.state = {
      matched: [],
      picks: [],
      won: false
      // images: shuffle(imagesFromJSON)
    }
  }

// look up fisher yates to understand the algorythm of shuffling the cards.
//   const shuffle (array) {
//   var m = array.length, t, i;
//
//   // While there remain elements to shuffle…
//   while (m) {
//
//     // Pick a remaining element…
//     i = Math.floor(Math.random() * m--);
//
//     // And swap it with the current element.
//     t = array[m];
//     array[m] = array[i];
//     array[i] = t;
//   }
//
//   return array;
// }

  // choose(card) function: this is only checking to see if we picked two cards.
  //   If the number of picks is 2:
  //     Do nothing (stop the player from choosing 3 cards).
  //   Store card index in picks.
  //   If the number of picks is now 2:
  //     check()
  choose (card) {
    if (this.state.picks.length === 2 || this.state.matched.includes(card)) { return } // DO NOTHING, BAIL OUT
    this.setState({
      picks: [...this.state.picks, card]
    }, () => {
      // Call back function that happens after
      // React is done updating the state.
      if (this.state.picks.length === 2) {
        this.check()
      }
    })
  }

  // check() function: this is checking our cards AFTER we picked the two cards (recall above function) and checking for a match as well as setting a delay.
  //   If picks[0] is equal to picks[1]:
  //     Add the cards to matches.
  //     If all matches found:
  //       Game over.
  //   Reset picks to [] after a short delay.
  check () {
    const picks = this.state.picks
    // const images = shuffle(imagesFromJSON)
    if (images[picks[0]] === images[picks[1]]) {
      this.setState({
        matched: [...this.state.matched, ...picks],
        picks: []
      }, () => {
        // Call back function that happens after
        // React is done updating the state.
        if (this.state.matched.length === images.length) {
          // Show modal
          this.setState({
            won: true
          })
        }
      })
    }
    setTimeout(() => {
      this.setState({ picks: [] })
    }, 3000)
  }

  // shuffling the cards randomly after the game is over.
  // shuffle (array) {
  //   const card = this.state.shuffling
  //   if (Math.random === card) {
  //     this.setState()
  //   }
  // }

  // For each card in faces:
  // If picks inclues card:
  //   Show card face.
  // Else:
  //   Show card back.
  render () {
    // an assignment of a value in other functions do not work in a different function: you have to reassign the name again in a different function. (review all the picks in each function as an example)
    const picks = this.state.picks
    const matched = this.state.matched
    // const images = shuffle(imagesFromJSON)
    return <div>
      {/* // ternary stating if a person won or else it states memory. */}
      <h1>{this.state.won ? 'YOU WIN' : 'MEMORY'}</h1>
      <section>
        <table>
          <tr>
            {/* connecting image src from boxitem and assigning the images from images.json to the src. */}
            <BoxItem image={images[0]} isUp={picks.includes(0) || matched.includes(0)} handleClick={() => this.choose(0)} />
            {/* assigning an isup value to the images and calling include to the picks/matched action. */}
            <BoxItem image={images[1]} isUp={picks.includes(1) || matched.includes(1)} handleClick={() => this.choose(1)} />
            {/* connecting the click action to the images and calling the choosing action. */}
            <BoxItem image={images[2]} isUp={picks.includes(2) || matched.includes(2)} handleClick={() => this.choose(2)} />
            <BoxItem image={images[3]} isUp={picks.includes(3) || matched.includes(3)} handleClick={() => this.choose(3)} />
          </tr>
          <tr>
            <BoxItem image={images[4]} isUp={picks.includes(4) || matched.includes(4)} handleClick={() => this.choose(4)} />
            <BoxItem image={images[5]} isUp={picks.includes(5) || matched.includes(5)} handleClick={() => this.choose(5)} />
            <BoxItem image={images[6]} isUp={picks.includes(6) || matched.includes(6)} handleClick={() => this.choose(6)} />
            <BoxItem image={images[7]} isUp={picks.includes(7) || matched.includes(7)} handleClick={() => this.choose(7)} />
          </tr>
          <tr>
            <BoxItem image={images[8]} isUp={picks.includes(8) || matched.includes(8)} handleClick={() => this.choose(8)} />
            <BoxItem image={images[9]} isUp={picks.includes(9) || matched.includes(9)} handleClick={() => this.choose(9)} />
            <BoxItem image={images[10]} isUp={picks.includes(10) || matched.includes(10)} handleClick={() => this.choose(10)} />
            <BoxItem image={images[11]} isUp={picks.includes(11) || matched.includes(11)} handleClick={() => this.choose(11)} />
          </tr>
          <tr>
            <BoxItem image={images[12]} isUp={picks.includes(12) || matched.includes(12)} handleClick={() => this.choose(12)} />
            <BoxItem image={images[13]} isUp={picks.includes(13) || matched.includes(13)} handleClick={() => this.choose(13)} />
            <BoxItem image={images[14]} isUp={picks.includes(14) || matched.includes(14)} handleClick={() => this.choose(14)} />
            <BoxItem image={images[15]} isUp={picks.includes(15) || matched.includes(15)} handleClick={() => this.choose(15)} />
          </tr>
        </table>
      </section>
    </div>
  }
}

export default App
