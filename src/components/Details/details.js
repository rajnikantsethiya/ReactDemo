import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './details.css';
import { connect } from 'react-redux';
import { userDetails } from '../../actions/detailsAction';

@cssModules(styles)
class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeStatus: ((JSON.parse(localStorage.getItem('likeStatus')) === null) || (JSON.parse(localStorage.getItem('likeStatus')) === true) ? true : false),
      bookmarkStatus: ((JSON.parse(localStorage.getItem('bookmarkStatus')) === null) || (JSON.parse(localStorage.getItem('bookmarkStatus')) === true) ? true : false)
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(userDetails());
  }

  like(status) {
    this.setState({ likeStatus: !status });
    localStorage.setItem('likeStatus', !status);
  }

  bookmark(status) {
    this.setState({ bookmarkStatus: !status });
    localStorage.setItem('bookmarkStatus', !status);
  }

  render() {
    const { user } = this.props;
    const bookmark = '../../src/assets/images/star_empty.png';
    const bookmarked = '../../src/assets/images/star_filled.png';

    return (
      <div className="details_block">
        <h2 className="title_text">Details</h2>
        <div className="like_bookmark_block">
          <div className="like_dislike_text" onClick={() => this.like(this.state.likeStatus)}>{ this.state.likeStatus ? 'Like' : 'DisLike' }</div>
          <img src={ this.state.bookmarkStatus ? bookmark : bookmarked } className="bookmark" onClick={() => this.bookmark(this.state.bookmarkStatus)} />
        </div>
        {
          user ?
          (<div>
            <div className="detail_small_block">
              <div className="name_text">Name:</div>
              <div className="name_value">{user.data.first_name} {user.data.last_name}</div>
            </div>
            <div className="detail_small_block">
              <div className="desc_text">Image:</div>
              <img src={user.data.avatar} className="desc_value" />
            </div>
          </div>) : ''
        }
      </div>
    );
  }
}

Details.propTypes = {
  image: PropTypes.func,
  user: PropTypes.object,
  dispatch: PropTypes.func
};

function mapStateToProps(state) {
  return {
    user: state.details.user
  };
}

export default connect(mapStateToProps)(Details);
