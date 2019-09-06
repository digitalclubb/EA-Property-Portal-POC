import { h, Component } from 'preact';

import Input from '../../elements/input';

class Address extends Component {

	state = {
		line1: '',
		line2: '',
		city: '',
		county: '',
		postcode: ''
	}

	componentWillMount() {
		const address = this.props.address;
		if ( address ) {
			this.setState({
				line1: address.line1,
				line2: address.line2,
				city: address.city,
				county: address.county,
				postcode: address.postcode
			});
		}
	}

	componentWillReceiveProps( nextProps ) {
		
		// Props have updated so we need to update state
		const address = nextProps.address;
		this.setState( state => ({
			...state,
			...address
			}
		));
	}

	render({ handleChange }) {
		return (
			<section id="address" class="section">
				<fieldset class="fieldset">
					<legend class="legend">
						<h3>Address</h3>
					</legend>
					
					<Input label="Building and street" htmlClass="input" id="address-line-1" name="address.line1" type="text" value={ this.state.line1 } handleChange={ handleChange }  />
					
					<Input htmlClass="input" id="address-line-2" name="address.line2" type="text" value={ this.state.line2 } handleChange={ handleChange }  />
					
					<Input label="Town or city" htmlClass="input input--short" id="city" name="address.city" type="text" value={ this.state.city } handleChange={ handleChange }  />

					<Input label="County" id="county" htmlClass="input input--short" name="address.county" type="text" value={ this.state.county } handleChange={ handleChange }  />

					<Input label="Postcode" htmlClass="input input--shortest" id="postcode" name="address.postcode" type="text" value={ this.state.postcode } handleChange={ handleChange }  />

				</fieldset>
			</section>
		)
	}
}

export default Address;
