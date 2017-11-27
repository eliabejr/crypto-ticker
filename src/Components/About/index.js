import React from 'react';
import { Helmet } from 'react-helmet'
import {Link} from 'react-router';
import NavBar from '../NavBar'

export default props => (
  <div className="About">

    <Helmet>
      <title>About | Crypto Watcher</title>
    </Helmet>

    <NavBar />
    <div className="app-body">
      <div className="container">
        <h2>About Crypto Watcher</h2>

        <div className="description">
        <p>Crypto Watcher is a open source project that monitore the price of principal cryptocurrencies: Bitcoin, Ethereum, DASH and Litecoin.</p>
        <p>Here, you can watch the price variation, volume on exchanges and the historical open and close prices.</p>
        <p>This site is a Progressive Web App built with React and Webpack. If you like this project, please considere donate some bitcoins to following address: 1B72koWyTMPSrEm2sba8RqUZkHti2xqQbQ</p>
        </div>
      </div>
    </div>

  </div>
)
