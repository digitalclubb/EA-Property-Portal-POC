import { h } from 'preact';

import Input from '../../elements/input';
import Textarea from '../../elements/textarea';

const Description = ({ property, handleChange }) => {
	return (
		<section id="description" class="section">
			<fieldset class="fieldset">
				<legend class="legend">
					<h3>Property Description</h3>
				</legend>
				
				<Input label="Type" htmlClass="input input--shortest" id="type" name="type" type="text" value={ property.type } handleChange={ handleChange }  />
				
				<Input label="Number of bedrooms" htmlClass="input input--shortest" id="bedrooms" name="bedrooms" type="number" value={ property.bedrooms } handleChange={ handleChange }  />

				<div class="form-group">
					<label class="label" for="features">Key features</label>
					{ property.features.map( feature => (
						<input class="input input--shortest" name="features" type="text" value={feature} />
					))}
					
					Add feature
				</div>

				<Textarea label="Description" id="description" name="description" rows="10" value={ property.description } handleChange={ handleChange }  />

			</fieldset>
		</section>
	)
}

export default Description;
