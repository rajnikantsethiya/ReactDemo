import React, { Component, PropTypes } from 'react';

class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="details_block">
        <h2 className="title_text">{ this.props.title }</h2>
        <div className="desc_text">{ this.props.desciption }</div>
      </div>
    );
  }
}

Details.propTypes = {
  title: PropTypes.string,
  desciption: PropTypes.string
};

export default Details;
