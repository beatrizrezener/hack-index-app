import React, { Component } from 'react';
import FeedbackPage from './FeedbackPage.js';

class Feedback extends Component {

  state = {
    usersData: ''
  };

  componentDidMount(){
    document.title = "GloboIndex"
  }

  render() {
    return (
      <FeedbackPage usersData={this.state.usersData}></FeedbackPage>
    );
  }
}
export default Feedback;
