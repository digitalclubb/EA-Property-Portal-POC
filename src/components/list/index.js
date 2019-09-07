import { h, Component } from 'preact';
import style from './style';

import Search from '../../components/search';
import Filters from '../../components/filters';
import Property from '../../components/property';

class List extends Component {

	constructor() {
		super();
		this.handleChange = this.handleChange.bind( this );
	}

	state = {
		searchTerm: '',
		filtered: []
	}

	// TODO: Crude, only searches address for POC
	handleChange( event ) {

		let properties = this.props.properties;
		let filtered = properties;

		if ( event.target.value !== '' ) {

			const filter = event.target.value.toLowerCase();
			filtered = properties.filter( property => {
				return Object.values( property.address ).some( value =>
					value.toLowerCase().includes( filter )
				);
			});
		} 

		this.setState({
			searchTerm: event.target.value,
			filtered: filtered
		});
	}

	componentWillMount() {
		this.setState({
		  filtered: this.props.properties
		});
	  }

	render() {
		return (
			<div>
				<Search handleChange={ this.handleChange } searchTerm={ this.state.searchTerm } />
				<div class="container">
					<table class={style.list}>
						<Filters />
						<tbody class={style.list__items}>
							{ this.state.filtered.map( item => (
								<Property item={ item } />
							))}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
};

export default List;
