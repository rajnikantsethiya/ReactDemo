import React, { Component } from 'react';
import data from '../../constants/data';
import Card from '../cards/cards';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(data);
    return (
      <div>
        <div>hello, I am react</div>
        <Card title={"rajnikant"} />
      </div>
    );
  }
}

export default Home;
