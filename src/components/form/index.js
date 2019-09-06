import { h, Component } from 'preact';
import nestedProperty from 'nested-property';

import Toolbar from '../toolbar';

// Different sections of the form
import Title from '../title';
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
		this.handleNewSubmit = this.handleNewSubmit.bind( this );
		this.newProperty = false;
	}

	state = {
		list: []
	}

	// Updating local state with values from form fields
	handleChange( event ) {
		const { name, value } = event.target;
		const property = this.state.list[0];
		const data = nestedProperty.set( property, name, value );

		this.setState({
			list: [ property ]
		});
	}

	// updateProperties is an existing action passed in
	handleSubmit() {
		this.props.updateProperties( this.state.list );
	}

	handleNewSubmit() {
		this.props.createProperty( this.state.list );
	}

	// Update state before the component gets mounted to the DOM
	componentWillMount() {

		// Filter existing list to get matching property
		let property = this.props.list.filter( property => property.id === parseInt( this.props.id ) );

		// If no matching property exists, it must be new
		if ( !property.length ) {
			property = [{
				id: parseInt( this.props.id ),
				status: 'draft'
			}]
			this.newProperty = true;
		}
		
		this.setState( { list: property } );
	}

	render() {
		const property = this.state.list[0];

		// Change event handler if it's new or existing
		let eventHandler = this.handleSubmit;
		if ( this.newProperty ) {
			eventHandler = this.handleNewSubmit;
		}

		return (
			<div>
				<Toolbar handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } handleNewSubmit={ this.handleNewSubmit } status={ property.status } newProperty={ this.newProperty } />
				<article class="article">
					<form onSubmit={ eventHandler }>
						<Title property={ property } handleChange={ this.handleChange } />
						<Address property={ property } handleChange={ this.handleChange } />
						<Description property={ property } handleChange={ this.handleChange } />
						<Photos photos={ property.photos } />
						<Floorplan floorplan={ property.floorplan } />
						<Price property={ property } handleChange={ this.handleChange } />
						<Schedule />
						<Notes property={ property } handleChange={ this.handleChange } />
					</form>
				</article>
			</div>
		)
	}
}

export default Form;
