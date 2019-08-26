import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Search from './search';
import Filters from './filters';
import Footer from './footer';

// Code-splitting is automated for routes
import List from '../routes/list';
import Create from '../routes/create';
import Edit from '../routes/edit';

export default class App extends Component {

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div>
				<Header />
				<div class="container">
					<Router onChange={ this.handleRoute }>
						<List path="/" />
						<Create path="/create/" />
						<Edit path="/edit/:id" />
					</Router>
					<Footer />
				</div>
			</div>
		);
	}
}
