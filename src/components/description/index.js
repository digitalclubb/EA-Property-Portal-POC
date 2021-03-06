import { h, Component } from 'preact';

import Input from '../../elements/input';
import Textarea from '../../elements/textarea';
import Features from '../../components/features';

class Description extends Component {

	state = {
		type: '',
		bedrooms: '',
		features: [],
		description: ''
	}

	componentWillMount() {
		const property = this.props.property;
		if ( property.type ) {
			this.setState({
				type: property.type,
				bedrooms: property.bedrooms,
				features: property.features,
				description: property.description
			});
		}
	}

	componentWillReceiveProps( nextProps ) {
		
		// Props have updated so we need to update state
		const property = nextProps.property;
		this.setState( state => ({
			...state,
			...property
			}
		));
	}

	render({ property, handleChange }) {
		return (
			<section id="description" class="section">
				<fieldset class="fieldset">
					<legend class="legend">
						<h3>Property Description</h3>
					</legend>
					
					<Input label="Type" htmlClass="input input--shortest" id="type" name="type" type="text" value={ this.state.type } handleChange={ handleChange }  />
					
					<Input label="Number of bedrooms" htmlClass="input input--shortest" id="bedrooms" name="bedrooms" type="number" value={ this.state.bedrooms } handleChange={ handleChange }  />

					<Features features={ this.state.features } />

					<Textarea label="Description" id="description" name="description" rows="10" value={ this.state.description } handleChange={ handleChange }  />

				</fieldset>
			</section>
		)
	}
}

export default Description;
