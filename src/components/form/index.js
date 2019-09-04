import { h, Component } from 'preact';
import style from './style';
import nestedProperty from 'nested-property';

import Toolbar from '../toolbar';

class Form extends Component {

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

		// TODO: consider constructor
		this.handleChange = this.handleChange.bind( this );
		this.handleSubmit = this.handleSubmit.bind( this );

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
						<section id="address" class="section">
							<fieldset class="fieldset">
								<legend class="legend">
									<h3>Address</h3>
								</legend>
								<div class="form-group">
									<label class="label" for="address-line-1">Building and street</label>
									<input class="input" id="address-line-1" name="address.line1" type="text" value={property.address.line1} onChange={this.handleChange} />
								</div>

								<div class="form-group">
									<input class="input" id="address-line-2" name="address.line2" type="text" value={property.address.line2} onChange={this.handleChange} />
								</div>

								<div class="form-group">
									<label class="label" for="city">Town or city</label>
									<input class="input input--short" id="city" name="address.city" type="text" value={property.address.city} onChange={this.handleChange} />
								</div>

								<div class="form-group">
									<label class="label" for="address-county">County</label>
									<input class="input input--short" id="address-county" name="address.county" type="text" value={property.address.county} onChange={this.handleChange} />
								</div>

								<div class="form-group">
									<label class="label" for="address-postcode">Postcode</label>
									<input class="input input--shortest" id="address-postcode" name="address.postcode" type="text" value={property.address.postcode} onChange={this.handleChange} />
								</div>
							</fieldset>
						</section>
						<section id="description" class="section">
							<fieldset class="fieldset">
								<legend class="legend">
									<h3>Property Description</h3>
								</legend>

								<div class="form-group">
									<label class="label" for="property">Type</label>
									<input class="input input--shortest" id="property" name="type" type="text" value={property.type} onChange={this.handleChange} />
								</div>

								<div class="form-group">
									<label class="label" for="bedrooms">Number of bedrooms</label>
									<input class="input input--shortest" id="bedrooms" min="1" max="100" name="bedrooms" type="number" value={property.bedrooms} onChange={this.handleChange} />
								</div>

								<div class="form-group">
									<label class="label" for="features">Key features</label>
									{ property.features.map( feature => (
										<input class="input input--shortest" name="features" type="text" value={feature} />
									))}
									
									Add feature
								</div>

								<div class="form-group">
									<label class="label" for="description">Description</label>
									<textarea class="textblock" id="description" rows="10" name="description" onChange={this.handleChange}>{property.description}</textarea>
								</div>
							</fieldset>
						</section>
						<section id="photos" class="section">
							<fieldset class="fieldset">
								<legend class="legend">
									<h3>Photos</h3>
								</legend>

								
							</fieldset>
						</section>
						<section id="floorplan" class="section">
							<fieldset class="fieldset">
								<legend class="legend">
									<h3>Floorplan</h3>
								</legend>

								
							</fieldset>
						</section>
						<section id="price" class="section">
							<fieldset class="fieldset">
								<legend class="legend">
									<h3>Price</h3>
								</legend>

								<div class="form-group">
									<label class="label" for="price">Current asking price</label>
									<span>&pound;</span><input class="input input--shortest" id="price" name="price" type="text" value={property.price} onChange={this.handleChange} />
								</div>
							</fieldset>
						</section>
						<section id="schedule" class="section">
							schedule: 
							expired:
							<fieldset class="fieldset">
								<legend class="legend">
									<h3>Publish settings</h3>
								</legend>

								<div class="form-group">
									<div class="label">Schedule</div>
									<label class="label-group">
										<input class="" name="schedule" type="radio" />
										No schedule
									</label>
									<label class="label-group">
										<input class="" name="schedule" type="radio" />
										Schedule start
									</label>
								</div>

								<div class="form-group">
									<div class="label">Active portals</div>
									<span class="hint">Select all that apply.</span>
									<div class="form-checkbox">
										<input class="checkbox" id="onthemarket" name="onthemarket" type="checkbox" value="onthemarket" />
										<label class="label-inline" for="onthemarket">On The Market</label>
									</div>
									<div class="form-checkbox">
										<input class="checkbox" id="primelocation" name="primelocation" type="checkbox" value="primelocation" />
										<label class="label-inline" for="primelocation">Primelocation</label>
									</div>
									<div class="form-checkbox">
										<input class="checkbox" id="rightmove" name="rightmove" type="checkbox" value="rightmove" />
										<label class="label-inline" for="rightmove">Rightmove</label>
									</div>
									<div class="form-checkbox">
										<input class="checkbox" id="zoopla" name="zoopla" type="checkbox" value="zoopla" />
										<label class="label-inline" for="zoopla">Zoopla</label>
									</div>
								</div>
							</fieldset>
						</section>
						<section id="notes" class="section">
							<fieldset class="fieldset">
								<legend class="legend">
									<h3>Internal notes</h3>
								</legend>

								<div class="form-group">
									<label class="label" for="notes">These notes are for your own records only</label>
									<textarea class="textblock" id="notes" rows="5" name="notes" onChange={this.handleChange}>{property.notes}</textarea>
								</div>
							</fieldset>
						</section>
					</form>
				</article>
			</div>
		)
	}
}

export default Form;
