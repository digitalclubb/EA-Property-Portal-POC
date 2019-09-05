import { h, Component } from 'preact';
import style from './style';
import nestedProperty from 'nested-property';

import Toolbar from '../toolbar';
import Input from '../../elements/input';
import Textarea from '../../elements/textarea';

// Different sections of the form
import Address from '../address';
import Description from '../description';
import Photos from '../photos';
import Floorplan from '../floorplan';
import Price from '../price';
import Schedule from '../schedule';
import Notes from '../notes';

class Form extends Component {

	constructor() {
		super();
		this.handleChange = this.handleChange.bind( this );
		this.handleSubmit = this.handleSubmit.bind( this );
	}

	state = {
		list: []
	}

	// Updating local state with values from form fields
	handleChange( event ) {
		const { name, value } = event.target;
		const property = this.state.list[0];
		const updateProperty = nestedProperty.set(property, name, value);
		this.setState({
			list: [ property ]
		});
	}

	// updateProperties is an existing action passed in
	handleSubmit() {
		event.preventDefault();
		this.props.updateProperties( this.state.list );
	}

	// Update state before the component gets mounted to the DOM
	componentWillMount() {

		// Filter property list based on ID in URL
		const filtered = this.props.list.filter( property => property.id === parseInt( this.props.id ) );
		this.setState( { list: filtered } );
	}

	// TODO: Break out this massive form into components :>
	render() {
		const property = this.state.list[0];
		return (
			<div>
				<Toolbar handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } status={ property.status } />
				<article class={style.article}>
					<form onSubmit={this.handleSubmit}>
						<Address property={property} handleChange={ this.handleChange } />
						<Description property={property} handleChange={ this.handleChange } />
						<Photos />
						<Floorplan />
						<Price property={property} handleChange={ this.handleChange } />
						<Schedule />
						<Notes property={property} handleChange={ this.handleChange } />
					</form>
				</article>
			</div>
		)
	}
}

export default Form;
