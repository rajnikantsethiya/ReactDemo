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
      // ticks: JSON.parse(localStorage.getItem('ticks') || 0),
      status: localStorage.getItem('status') || false
    }
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getDetails());
  }

  /*componentDidMount() {
    const self = this;
    setInterval(() => {
      self.setState({ ticks: (self.state.ticks + 1) });
       localStorage.setItem('ticks', JSON.stringify(this.state.ticks));
    localStorage.clear('ticks')
    }, 1000);
  }*/

  like(status) {
    if (status) {
      localStorage.setItem('status', false)
    } else (
        localStorage.setItem('status', true)
      )
  }

  cardClick(card) {
    const { dispatch } = this.props;
    dispatch(push('/details'));
  }

  render() {
    const { cards } = this.props;
    const likeImage = '../../src/assets/images/like.png';
    const dislikeImage = '../../src/assets/images/dislike.jpg';

    return (
      <div> {
        cards && cards.data.map((card) => {
          return (
            <div key={card.first_name} className="card_block" onClick={()=>this.cardClick(card)}>
              <div className="card_title">{card.first_name} {card.last_name}</div>              
              <div className="like_dislike_text" onClick={() => this.like(this.state.status)}>{ this.state.status ? 'Like' : 'Dislike' }</div>
              // <span>{this.state.ticks}</span>
            </div>
          );
        })
      }
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
