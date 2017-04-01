import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './details.css';

@cssModules(styles)
class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { cards } = this.props;
    return (
      <div className="details_block">
        <h2 className="title_text">Details</h2>
        <div className="detail_small_block">
          <div className="name_text">Name:</div>
          <div className="name_value">mkmkk</div>
        </div>
        <div className="detail_small_block">
          <div className="name_text">mnknk</div>
          <div className="desc_text">mkmkk</div>
        </div>
        <div className="detail_small_block">
          <div className="desc_text">Description:</div>
          <div className="desc_value">mkmkk</div>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  title: PropTypes.string,
  desciption: PropTypes.string,
  image: PropTypes.image,
  // cards: PropTypes.object
};

// function mapStateToProps(state) {
//   // cards: state.deatils.cards
// }

export default Details;
