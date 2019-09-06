import { h, Component } from 'preact';

import Input from '../../elements/input';

class Title extends Component {

	state = {
		title: ''
	}

	componentWillMount() {
		const title = this.props.title;
		if ( title ) {
			this.setState({
				title: title
			});
		}
	}

	componentWillReceiveProps( nextProps ) {

		// Props have updated so we need to update state
		const title = nextProps.title;
		this.setState({
			title: nextProps.title
		});
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
