import { h, Component } from 'preact';
import { Provider } from 'unistore/preact';

import store from '../store'

import Header from './header';
import Search from './search';
import Filters from './filters';
import Footer from './footer';

import Router from '../routes'

export default class App extends Component {

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div>
				<Header />
				<Provider store={store}>
					<Router />
				</Provider>
				<Footer />
			</div>
		);
	}
}
