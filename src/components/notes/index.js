import { h, Component } from 'preact';

import Textarea from '../../elements/textarea';

class Notes extends Component {

	state = {
		notes: ''
	}

	componentWillMount() {
		const notes = this.props.notes;
		if ( notes ) {
			this.setState({
				notes: notes
			});
		}
	}

	componentWillReceiveProps( nextProps ) {
		
		// Props have updated so we need to update state
		const notes = nextProps.notes;
		this.setState({
			notes: notes
		});
	}

	render({ property, handleChange }) {
		return (
			<section id="notes" class="section">
				<fieldset class="fieldset">
					<legend class="legend">
						<h3>Internal notes</h3>
					</legend>
					<Textarea label="These notes are for internal use only" id="notes" name="notes" rows="5" value={ this.state.notes } handleChange={ handleChange }  />
				</fieldset>
			</section>
		)
	}
}

export default Notes;
