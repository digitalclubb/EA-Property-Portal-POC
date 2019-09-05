import { h } from 'preact';

const Price = ({ property, handleChange }) => {
	return (
		<section id="price" class="section">
			<fieldset class="fieldset">
				<legend class="legend">
					<h3>Price</h3>
				</legend>

				<div class="form-group">
					<label class="label" for="price">Current asking price</label>
					<span>&pound;</span><input class="input input--shortest" id="price" name="price" type="text" value={ property.price } onChange={ handleChange } />
				</div>
			</fieldset>
		</section>
	)
}

export default Price;
