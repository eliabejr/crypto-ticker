import React, { Component } from 'react';
import {Link} from 'react-router';
import { Helmet } from 'react-helmet'
import { Chart } from 'react-google-charts';
import NavBar from '../NavBar'

class Panel extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
	  <div className="Panel">

	  	<Helmet>
	      <title>Coins Panel | Crypto Watcher</title>
	    </Helmet>

      <NavBar />
      <div className="app-body">

        <div className="container" id="cotacoes">
          <h2 className="title text-center">Currencies Observed</h2>

          <div className="row" id="card-list-prices">

            <div className="col-3">
              <Link to="bitcoin">
                <div className="card">
                  <div className="card-price-icon" id="bitcoin-variation">
                    -- %
                  </div>

                  <div className="card-price-info">
                    <div className="coin-title">
                      Bitcoin Price:
                    </div>
                    <span className="coin-price" id="bitcoin-price">--</span> <span id="bitcoin-target"></span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-3">
              <Link to="ethereum">
                <div className="card">
                  <div className="card-price-icon" id="ethereum-variation">
                    -- %
                  </div>

                  <div className="card-price-info">
                    <div className="coin-title">
                      Ethereum Price:
                    </div>
                    <span className="coin-price" id="ethereum-price">--</span> <span id="ethereum-target"></span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-3">
              <Link to="dash">
                <div className="card">
                  <div className="card-price-icon" id="dash-variation">
                    -- %
                  </div>

                  <div className="card-price-info">
                    <div className="coin-title">
                      DASH Price:
                    </div>
                    <span className="coin-price" id="dash-price">--</span> <span id="dash-target"></span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-3">
              <Link to="litecoin">
                <div className="card">
                  <div className="card-price-icon" id="ltc-variation">
                    -- %
                  </div>

                  <div className="card-price-info">
                    <div className="coin-title">
                      Litecoin Price:
                    </div>
                    <span className="coin-price" id="ltc-price">--</span> <span id="ltc-target"></span>
                  </div>
                </div>
              </Link>
            </div>

          </div>

          <div id="ajuda" className="row">
            <div className="col-4">
              <div className="card">
                <div className="card-help-icon">
                </div>
                <div className="card-help-info">
                  Test
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card">
                <div className="card-help-icon">
                </div>
                <div className="card-help-info">
                  Test
                </div>
              </div>
            </div>
            <div className="col-4">
              <a href="bitcoin:1B72koWyTMPSrEm2sba8RqUZkHti2xqQbQ">
                <div className="card">
                  <div className="card-help-icon">
                  </div>
                  <div className="card-help-info">
                    Help the Dev
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


    );
  }

	componentDidMount() {

		function getCoinPrice() {

		if (document.getElementById("bitcoin-price") == null){
			console.log("aaa");
		} else {
			const apiBtc = 'https://api.cryptonator.com/api/ticker/btc-usd';
			fetch(apiBtc)
			  .then((resp) => resp.json())
			  .then(function(data) {
			    var btcValueCrude = data.ticker.price;
			    var btcValue = parseFloat(btcValueCrude).toFixed(2);
			    var btcTarget = data.ticker.target;
			    var btcChangeCrude = data.ticker.change;
			    var btcChangeFixed = parseFloat(btcChangeCrude).toFixed(2);
			    var divBtcPrice = document.getElementById("bitcoin-price");
			    var divBtcTarget = document.getElementById("bitcoin-target");
		    	divBtcPrice.innerHTML = btcValue;
		    	divBtcTarget.innerHTML = btcTarget;

		    	if (btcChangeFixed>0) {
			    	var divBtcVariation = document.getElementById("bitcoin-variation");
			    	divBtcVariation.className += " price-high";
		    		divBtcVariation.innerHTML = btcChangeFixed + "%";
		    	} else {
			    	var divBtcVariation = document.getElementById("bitcoin-variation");
		    		divBtcVariation.innerHTML = btcChangeFixed + "%";
			    	divBtcVariation.className += " price-low";
		    	}

			    })
			  .catch(function(error) {
			    console.log(JSON.stringify(error));
			  });
			}

		if (document.getElementById("ethereum-price") == null){
			console.log("aaa");
		} else {
			const apiEth = 'https://api.cryptonator.com/api/ticker/eth-usd';
			fetch(apiEth)
			  .then((resp) => resp.json())
			  .then(function(data) {
			    var ethValueCrude = data.ticker.price;
			    var ethValue = parseFloat(ethValueCrude).toFixed(2);
			    var ethTarget = data.ticker.target;
			    var ethChangeCrude = data.ticker.change;
			    var ethChangeFixed = parseFloat(ethChangeCrude).toFixed(2);
			    var divEthPrice = document.getElementById("ethereum-price");
			    var divEthTarget = document.getElementById("ethereum-target");
		    	divEthPrice.innerHTML = ethValue;
		    	divEthTarget.innerHTML = ethTarget;

		    	if (ethChangeFixed>0) {
			    	var divEthVariation = document.getElementById("ethereum-variation");
			    	divEthVariation.className += " price-high";
		    		divEthVariation.innerHTML = ethChangeFixed  + "%";
		    	} else {
			    	var divEthVariation = document.getElementById("ethereum-variation");
		    		divEthVariation.innerHTML = ethChangeFixed  + "%";
			    	divEthVariation.className += " price-low";
		    	}

			    })
			  .catch(function(error) {
			    console.log(JSON.stringify(error));
			  });

		}

		if (document.getElementById("dash-price") == null){
			console.log("aaa");
		} else {
			const apiDash = 'https://api.cryptonator.com/api/ticker/dash-usd';
			fetch(apiDash)
			  .then((resp) => resp.json())
			  .then(function(data) {
			    var dashValueCrude = data.ticker.price;
			    var dashValue = parseFloat(dashValueCrude).toFixed(2);
			    var dashTarget = data.ticker.target;
			    var dashChangeCrude = data.ticker.change;
			    var dashChangeFixed = parseFloat(dashChangeCrude).toFixed(2);
			    var divDashPrice = document.getElementById("dash-price");
			    var divDashTarget = document.getElementById("dash-target");
		    	divDashPrice.innerHTML = dashValue;
		    	divDashTarget.innerHTML = dashTarget;

		    	if (dashChangeFixed>0) {
			    	var divDashVariation = document.getElementById("dash-variation");
			    	divDashVariation.className += " price-high";
		    		divDashVariation.innerHTML = dashChangeFixed  + "%";
		    	} else {
			    	var divDashVariation = document.getElementById("dash-variation");
		    		divDashVariation.innerHTML = dashChangeFixed  + "%";
			    	divDashVariation.className += " price-low";
		    	}

			    })
			  .catch(function(error) {
			    console.log(JSON.stringify(error));
			  });

		}

		if (document.getElementById("ltc-price") == null){
			console.log("aaa");
		} else {
			const apiLtc = 'https://api.cryptonator.com/api/ticker/ltc-usd';
			fetch(apiLtc)
			  .then((resp) => resp.json())
			  .then(function(data) {
			    var ltcValueCrude = data.ticker.price;
			    var ltcValue = parseFloat(ltcValueCrude).toFixed(2);
			    var ltcTarget = data.ticker.target;
			    var ltcChangeCrude = data.ticker.change;
			    var ltcChangeFixed = parseFloat(ltcChangeCrude).toFixed(2);
			    var divLtcPrice = document.getElementById("ltc-price");
			    var divLtcTarget = document.getElementById("ltc-target");
		    	divLtcPrice.innerHTML = ltcValue;
		    	divLtcTarget.innerHTML = ltcTarget;

		    	if (ltcChangeFixed>0) {
			    	var divLtcVariation = document.getElementById("ltc-variation");
		    		divLtcVariation.innerHTML = ltcChangeFixed  + "%";
			    	divLtcVariation.className += " price-high";
		    	} else {
			    	var divLtcVariation = document.getElementById("ltc-variation");
		    		divLtcVariation.innerHTML = ltcChangeFixed  + "%";
			    	divLtcVariation.className += " price-low";
		    	}

			    })
			  .catch(function(error) {
			    console.log(JSON.stringify(error));
			  });

			}
		} // end getCoinPrice
		getCoinPrice();
	  	setInterval(getCoinPrice, 30000);

 	} // end componentDidMount
}

export default Panel;
