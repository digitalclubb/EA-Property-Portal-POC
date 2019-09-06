import { h, Component } from 'preact';
import style from './style';

class Features extends Component {

	constructor() {
		super();
		this.handleClick = this.handleClick.bind( this ); 
	}

	state = {
		features: []
	}

	handleClick( event ) {
		event.preventDefault();
		this.setState( prevState => ({
			features: [...prevState.features, []]
		}))
	}

	componentWillMount() {
		const features = this.props.features;
		if ( features ) {
			this.setState({
				features: features
			});
		}
	}

	// TODO: Not fully implemented for POC
	render() {
		return (
			<div class="form-group">
				<label class="label" for="features">Key features</label>
				
				{ this.state.features.map( feature => (
					<input class="input input--shortest input--feature" name="features" type="text" value={ feature } />
				))}

				<button class={style.features__button} onClick={ this.handleClick }>Add feature</button>
			</div>

		)
	}
}

export default Features;
