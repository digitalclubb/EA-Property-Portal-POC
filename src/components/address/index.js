import { h } from 'preact';

import Input from '../../elements/input';

const Address = ({ property, handleChange }) => {
	return (
		<section id="address" class="section">
			<fieldset class="fieldset">
				<legend class="legend">
					<h3>Address</h3>
				</legend>
				
				<Input label="Building and street" htmlClass="input" id="address-line-1" name="address.line1" type="text" value={ property.address.line1 } handleChange={ handleChange }  />
				
				<Input htmlClass="input" id="address-line-2" name="address.line2" type="text" value={ property.address.line2 } handleChange={ handleChange }  />
				
				<Input label="Town or city" htmlClass="input input--short" id="city" name="address.city" type="text" value={ property.address.city } handleChange={ handleChange }  />

				<Input label="County" id="county" htmlClass="input input--short" name="address.county" type="text" value={ property.address.county } handleChange={ handleChange }  />

				<Input label="Postcode" htmlClass="input input--shortest" id="postcode" name="address.postcode" type="text" value={ property.address.postcode } handleChange={ handleChange }  />

			</fieldset>
		</section>
	)
}

export default Address;
