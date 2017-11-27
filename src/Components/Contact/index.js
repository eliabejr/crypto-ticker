import React from 'react';
import { Helmet } from 'react-helmet'
import {Link} from 'react-router';
import NavBar from '../NavBar'

export default props => (
  <div className="Contact">

    <Helmet>
      <title>Contact | Crypto Watcher</title>
    </Helmet>

    <NavBar />

    <div className="app-body">
      <div className="container" id="contact">
        <h2>Get in Touch!</h2>

        <div id="social-links">

            <a href="http://m.me/eliabej" rel="noopener noreferrer" target="_blank" title="Message me on Facebook!">
              <span className="fa-stack fa-lg" aria-hidden="true">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
              </span>
            </a>

            <a href="http://br.linkedin.com/in/eliabejr" rel="noopener noreferrer" target="_blank" title="See my linkedin">
              <span className="fa-stack fa-lg" aria-hidden="true">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
              </span>
            </a>

            <a href="http://github.com/eliabejr" rel="noopener noreferrer" target="_blank" title="My other projects">
              <span className="fa-stack fa-lg" aria-hidden="true">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-github fa-stack-1x fa-inverse"></i>
              </span>
            </a>

        </div>
      </div>
    </div>

  </div>
)
