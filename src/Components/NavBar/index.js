import React from 'react';
import {Link} from 'react-router';

function NavBar() {
  return (
    <nav className="navbar">
			<div className="container">
				<button className="drawer left">
					<span className="icon-bar" id="bar1"></span>
					<span className="icon-bar" id="bar2"></span>
					<span className="icon-bar" id="bar3"></span>
				</button>
				<div className="brand">CW</div>
				<div className="nav-menu right">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="panel">Panel</Link></li>
						<li><Link to="about">About</Link></li>
						<li><a href="https://github.com/eliabejr/crypto-watcher">GitHub</a></li>
						<li><Link to="contact">Contact</Link></li>
					</ul>
				</div>
			</div>
		</nav>
  );
}

export default NavBar;
