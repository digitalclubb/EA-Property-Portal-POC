import { h, Component } from 'preact';

import Textarea from '../../elements/textarea';

class Notes extends Component {

	state = {
		notes: ''
	}

	componentWillMount() {
		const property = this.props.property;
		if ( property ) {
			this.setState({
				notes: property.notes
			});
		}
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
