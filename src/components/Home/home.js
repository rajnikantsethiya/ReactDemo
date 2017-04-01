import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './home.css';
import { push } from 'redux-router';
import { connect } from 'react-redux';
import { getDetails } from '../../actions/detailsAction';

@cssModules(styles)
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeStatus: ((JSON.parse(localStorage.getItem('likeStatus')) === null) || (JSON.parse(localStorage.getItem('likeStatus')) === true) ? true : false),
      bookmarkStatus: ((JSON.parse(localStorage.getItem('bookmarkStatus')) === null) || (JSON.parse(localStorage.getItem('bookmarkStatus')) === true) ? true : false)
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getDetails());
  }

  like(status) {
    this.setState({ likeStatus: !status });
    localStorage.setItem('likeStatus', !status);
  }

  bookmark(status) {
    this.setState({ bookmarkStatus: !status });
    localStorage.setItem('bookmarkStatus', !status);
  }

  cardClick() {
    const { dispatch } = this.props;
    dispatch(push('/details'));
  }

  render() {
    const { cards } = this.props;
    const bookmark = '../../src/assets/images/star_empty.png';
    const bookmarked = '../../src/assets/images/star_filled.png';

    // localStorage.clear('likeStatus');
    return (
      <div className="main_block">
        <h1 className="head_title">Users List</h1> {
        cards && cards.data.map((card) => {
          return (
            <div key={card.first_name} className="card_block">
              <div className="card_title" onClick={() => this.cardClick(this, card)}>{card.first_name} {card.last_name}</div>
              <div className="like_dislike_text" onClick={() => this.like(this.state.likeStatus)}>{ this.state.likeStatus ? 'Like' : 'DisLike' }</div>
              <img src={ this.state.bookmarkStatus ? bookmark : bookmarked } className="bookmark" onClick={() => this.bookmark(this.state.bookmarkStatus)} />
            </div>
          );
        })
      }
      <p className="terms">*Click on name to see the deatils</p>
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,
  cards: PropTypes.object
};

function mapStateToProps(state) {
  return {
    cards: state.details.card
  };
}

export default connect(mapStateToProps)(Home);
