import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './home.css';
import { push } from 'redux-router';
import { connect } from 'react-redux';
import { setDetails } from '../../actions/detailsAction';

@cssModules(styles)
class Home extends Component {
  constructor(props) {
    super(props);

  }

  cardClick(card) {
    const { dispatch } = this.props;
    dispatch(setDetails(card));
    dispatch(push('/details'));
  }

  render() {
   const data = this.props.data;
    const likeImage = '../../src/assets/images/like.png';
    const dislikeImage = '../../src/assets/images/dislike.jpg';

    return (
      <div>hello, I am react
        <div> {
          data.map((card) => {
            return (
              <div key={card.title} className="card_block" onClick={()=>this.cardClick(card)}>
                <div className="card_title">{card.title}</div>
                <img src={likeImage} className="like_image" />
                <img src={dislikeImage} className="dislike_image" />
              </div>
            );
          })
        }
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func
};

function mapStateToProps(state) {
  return {
    data: state.books
  };
}


export default connect(mapStateToProps)(Home);
