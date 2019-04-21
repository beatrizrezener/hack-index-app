import React, { Component } from 'react';
import './App.css';
import Leads from './Leads';

const API = 'https://globoindex.tk/api/salles';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  static navigationOptions = {
    title: 'Chat',
    headerStyle: { backgroundColor: 'red' },
    headerTitleStyle: { color: 'green' },
  }
  
  componentDidMount(){
    document.title = "GloboIndex"
  }

  componentWillMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => { this.setState({ data }) });
  }

  render() {
    return (
     <Leads data={this.state.data} ></Leads>
    );
  }
}

export default App;
