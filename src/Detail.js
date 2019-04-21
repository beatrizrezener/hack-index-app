import React, { Component } from 'react';
import DetailPage from './DetailPage.js';

const API = 'https://globoindex.tk/api/salles/';

class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
        id: props.match.params.id,
        data: {},
    }
  }

  componentWillMount() {
    fetch(API +  this.state.id)
      .then(response => response.json())
      .then(data => { this.setState({ data }) });
  }

  render() {    
    return (
      <DetailPage data={this.state.data}></DetailPage>
    );
  }
}
export default Detail;
