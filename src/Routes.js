import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router, Redirect, IndexRoute } from 'react-router'

import Root from './index';
import Home from './Components/Home';
import Panel from './Components/Panel';
import About from './Components/About';
import Contact from './Components/Contact';

import Bitcoin from './Components/Coins/Bitcoin';
import Ethereum from './Components/Coins/Ethereum';
import Dash from './Components/Coins/Dash';
import Litecoin from './Components/Coins/Litecoin';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home} />
      <Route path="/panel" component={Panel} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/bitcoin" component={Bitcoin} />
      <Route path="/ethereum" component={Ethereum} />
      <Route path="/dash" component={Dash} />
      <Route path="/litecoin" component={Litecoin} />
    </Route>
  </Router>, document.getElementById('app'))

registerServiceWorker();
