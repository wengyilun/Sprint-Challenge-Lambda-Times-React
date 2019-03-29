import React, { Component } from 'react';
import Card from './Card';
import PropTypes from "prop-types";

const Cards = props => {

  return (
    <div className="cards-container">
      {props.cards.map((el, idx) => (
        <Card {...el} key={idx} />
      ))}
    </div>
  )
}

Cards.propTypes = {
   cards:PropTypes.arrayOf(
            PropTypes.shape({
                   headline: PropTypes.string.isRequired,
                   tab: PropTypes.string.isRequired,
                   img: PropTypes.string.isRequired,
                   author:PropTypes.string.isRequired
            })
   )
}


export default Cards;
