import { h, Component } from 'preact';

import Textarea from '../../elements/textarea';

class Notes extends Component {

	state = {
		notes: ''
	}

	componentWillMount() {
		const property = this.props.property;
		if ( property.notes ) {
			this.setState({
				notes: property.notes
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
			<section id="notes" class="section">
				<fieldset class="fieldset">
					<legend class="legend">
						<h3>Internal notes</h3>
					</legend>
					<Textarea label="These notes are for your own records only" id="notes" name="notes" rows="5" value={ this.state.notes } handleChange={ handleChange }  />
				</fieldset>
			</section>
		)
	}
}

export default Notes;
