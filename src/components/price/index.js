import { h, Component } from 'preact';

class Price extends Component {

	state = {
		price: ''
	}

	componentWillMount() {
		const price = this.props.price;
		if ( price ) {
			this.setState({
				price: price
			});
		}
	}

	componentWillReceiveProps( nextProps ) {
		
		// Props have updated so we need to update state
		const price = nextProps.price;
		this.setState({
			price: price
		});
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
