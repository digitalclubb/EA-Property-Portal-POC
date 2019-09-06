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

	// TODO: Crude, only searches first line address for POC
	handleChange( event ) {

		let properties = this.props.properties;
		let filtered = [];

		if ( event.target.value !== '' ) {

			filtered = properties.filter( property => {

				const lowerCase = property.address.line1.toLowerCase();
				const filter = event.target.value.toLowerCase();

				return lowerCase.includes( filter );
			});

		} else {
			filtered = properties;
		}

		this.setState({
			searchTerm: event.target.value,
			filtered: filtered
		});
	}

	componentDidMount() {
		this.setState({
		  filtered: this.props.properties
		});
	  }
	  
	  componentWillReceiveProps( nextProps ) {
		this.setState({
		  filtered: nextProps.properties
		});
	  }

	render() {
		return (
			<div>
				<Search handleChange={ this.handleChange } searchTerm={ this.state.searchTerm } />
				<table class={style.list}>
					<Filters />
					<tbody class="list">
						{ this.state.filtered.map( item => (
							<Property item={ item } />
						))}
					</tbody>
				</table>
			</div>
		)
	}
};

export default List;
