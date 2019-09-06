import { h, Component } from 'preact';

import Input from '../../elements/input';

class Title extends Component {

	state = {
		title: ''
	}

	componentWillMount() {
		const property = this.props.property;
		if ( property.title ) {
			this.setState({
				title: property.title
			});
		}
	}

	componentWillReceiveProps( nextProps ) {
		
		// Props have updated so we need to update state
		const property = nextProps.property.address;
		this.setState( state => ({
			...state,
			...property
			}
		));
	}

	render({ handleChange }) {
		return (
			<section id="title" class="section">
				<fieldset class="fieldset">
					<legend class="legend">
						<h3>Title</h3>
					</legend>

					<Input label="Descriptive title" htmlClass="input" id="title" name="title" type="text" value={ this.state.title } handleChange={ handleChange }  />
					
				</fieldset>
			</section>
		)
	}
}

export default Title;
