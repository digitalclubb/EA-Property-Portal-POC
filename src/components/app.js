import { h, Component } from 'preact';
import { Provider } from 'unistore/preact';
import store from '../store'

import Header from './header';
import Router from '../routes'

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Provider store={store}>
					<Router />
				</Provider>
			</div>
		);
	}
}
