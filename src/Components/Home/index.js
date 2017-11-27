import React from 'react';
import { Helmet } from 'react-helmet'
import {Link} from 'react-router';

export default props => (
      <div className="Home">

      <Helmet>
	      <title>Crypto Watcher - Your cryptocurrencies central</title>
	    </Helmet>

      <header className="text-center fullscreen align-middle">
  		  <div className="container">
  		    <h1 className="animate fadeIn">Crypto Watcher</h1>
  		    <h3 className="animate fadeIn delay">Your cryptocurrencies central</h3>

  		    <div id="call-to-actions" className="animate fadeIn delay-2x">

  		    	<Link to="panel">
  			      <button className="btn btn-default center-block">Panel</button>
  		    	</Link>

        		<Link to="query">
			         <button className="btn btn-green center-block">Sign In</button>
        		</Link>

  		    </div>

  		  </div>
		  </header>

      <section id="who-we-are">
        <div class="container">
          <h1>O que é PRISMA?</h1>
          <p class="description">O Futuro chegou! PRISMA é uma plataforma de investimentos que trabalha como seu consultor pessoal de criptomoedas. </p>
        </div>
      </section>

      </div>
)
