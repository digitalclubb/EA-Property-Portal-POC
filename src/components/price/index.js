import { h, Component } from 'preact';

class Price extends Component {

	state = {
		price: ''
	}

	componentWillMount() {
		const property = this.props.property;
		if ( property ) {
			this.setState({
				price: property.price
			});
		}
	}

	render({ property, handleChange }) {
		return (
			<section id="price" class="section">
				<fieldset class="fieldset">
					<legend class="legend">
						<h3>Price</h3>
					</legend>

					<div class="form-group">
						<label class="label" for="price">Current asking price</label>
						<span>&pound;</span><input class="input input--shortest" id="price" name="price" type="text" value={ this.state.price } onChange={ handleChange } />
					</div>
				</fieldset>
			</section>
		)
	}
}

export default Price;
