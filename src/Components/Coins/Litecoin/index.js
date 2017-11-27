import React, { Component } from 'react';
import { Helmet } from 'react-helmet'
import { Chart } from 'react-google-charts';
import NavBar from '../../NavBar'

class Litecoin extends Component {
    constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Litecoin-page">

      	<Helmet>
	      <title>Litecoin | Crypto Watcher</title>
	    </Helmet>

        <NavBar />
		<section className="container" id="exchanges">

			<h2 className="title text-center">Litecoin Price History</h2>

			<section id="volume-24h">
				<ul id="price-history"></ul>
			</section>
		</section>
      </div>
    );
  }

	componentDidMount() {

		function createNode(element) {
		  return document.createElement(element);
		}

		function append(parent, el) {
		return parent.appendChild(el);
		}

		const ul = document.getElementById('price-history');
		const apiLitecoinPriceList = 'https://min-api.cryptocompare.com/data/histoday?fsym=LTC&tsym=USD&limit=11&aggregate=3';
		fetch(apiLitecoinPriceList)
		.then((resp) => resp.json())
		.then(function(data) {
		let history = data.Data;
		return history.map(function(history) {
		  let li = createNode('li'),
		      span = createNode('span');
		      var open = parseFloat(history.open).toFixed(2);
		      var close = parseFloat(history.close).toFixed(2);
		      var high = parseFloat(history.high).toFixed(2);
		      var low = parseFloat(history.low).toFixed(2);
          var timestamp = (history.time)*1000;
          var toDay = new Date(timestamp).getDate();
          var toMonth = new Date(timestamp).getMonth()+1;
          var toYear = new Date(timestamp).getFullYear();
          var date = toDay+'/'+toMonth+'/'+toYear;
		  span.innerHTML = `<b>Date:${date}</b> Open: ${open} USD<br/>Close: ${close} USD`;
		  append(li, span);
		  append(ul, li);
		})
		})
		.catch(function(error) {
			console.log(JSON.stringify(error));
		});
 	}


}

export default Litecoin;
