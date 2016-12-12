import React, { Component } from 'react'
import styles from './BoxItem.scss'

// class is a function expanding the details of the BoxItem
class BoxItem extends Component {

  render () {
// assigning function upClass to a 'if/else' statement explaining if the properties of the card is up, then leave the style up, else leave it down.
    const upClass = this.props.isUp ? styles.up : styles.down
// Return function for the tiles themselves
    return <td
// assigning a clicking value to the cards by creating a function and calling it.
      onClick={() => this.props.handleClick()}
// assigning a className to the array. Styling the root within the scss and styling the cards in the previous function and calling the join mechanism to join the previous function and the scss.
      className={[styles.root, upClass].join(' ')}>
      {/* creating an image for the properties. connecting the images to the App.js */}
      <img src={this.props.image} />
    </td>
  }

}

export default BoxItem
