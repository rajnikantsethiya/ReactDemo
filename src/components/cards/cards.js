import React, { Component, PropTypes } from 'react';

class Card extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="card">
        <div>cards</div>
        <div className="card-title">{ this.props.title }</div>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.any
};

export default Card;
