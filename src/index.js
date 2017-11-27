import React from 'react';
import Routes from './Routes';
import Home from './Components/Home';
import Panel from './Components/Panel';
import Bitcoin from './Components/Coins/Bitcoin';
import './Assets/css/style.css';

export default class Root extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}
