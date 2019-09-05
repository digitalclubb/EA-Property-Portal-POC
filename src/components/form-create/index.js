import { h, Component } from 'preact';
import nestedProperty from 'nested-property';

import Toolbar from '../toolbar';

// Different sections of the form
import Address from '../address';
import Description from '../description';
import Photos from '../photos';
import Floorplan from '../floorplan';
import Price from '../price';
import Schedule from '../schedule';
import Notes from '../notes';

class FormCreate extends Component {

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

	}

	// updateProperties is an existing action passed in
	handleSubmit() {
		event.preventDefault();
		this.props.updateProperties( this.state.list );
	}

	render() {
		return (
			<div>
				<Toolbar handleChange={ this.handleChange } handleSubmit={ this.handleSubmit } status="Draft" />
				<article class="article">
					<form onSubmit={this.handleSubmit}>
						<Address handleChange={ this.handleChange } />
						<Description handleChange={ this.handleChange } />
						<Photos />
						<Floorplan />
						<Price handleChange={ this.handleChange } />
						<Schedule />
						<Notes handleChange={ this.handleChange } />
					</form>
				</article>
			</div>
		)
	}
}

export default FormCreate;
