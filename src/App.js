import React, { Component } from 'react';

import {BrowserRouter, Route, Link} from 'react-router-dom';

import logo from './logo.svg';

import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<BrowserRouter>
					<div>
						<Route exact path="/" render={() => <div>Home screen</div>} />
						<Route exact path="/ryan" render={() => <div>Hello from Ryan's section!</div>} />
						<Route exact path="/chris" render={() => <div>Hello from Chris' section`!</div>} />
						<Route exact path="/kris" render={() => <div>Hello from Kris' section!</div>} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
