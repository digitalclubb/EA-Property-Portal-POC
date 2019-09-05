import { h } from 'preact';

import Textarea from '../../elements/textarea';

const Notes = ({ property, handleChange }) => {
	return (
		<section id="notes" class="section">
			<fieldset class="fieldset">
				<legend class="legend">
					<h3>Internal notes</h3>
				</legend>
				<Textarea label="These notes are for your own records only" id="notes" name="notes" rows="5" value={ property.notes } handleChange={ handleChange }  />
			</fieldset>
		</section>
	)
}

export default Notes;
