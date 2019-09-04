import { h, Component } from 'preact';
import style from './style';

class Toolbar extends Component {

	constructor() {
		super();
		this.handleClick = this.handleClick.bind( this );
		this.updateStatus = this.updateStatus.bind( this );
	}

	state = {
		showPublish: false
	}

	// TODO: This is super hacky so fix it
	updateStatus( event ) {
		const status = {
			target: {
				name: event.target.name,
				value: event.target.value === 'published' ? 'draft' : 'published'
			}
		};
		this.props.handleChange( status );
		this.props.handleSubmit();
	}

	// Simple toggle to show/hide the Status dropdown
	handleClick( event ) {
		this.setState( prevState => ({
			showPublish: !prevState.showPublish
		}));
	}

	render({ handleSubmit, status }) {
		return (
			<div class={style.toolbar}>
				<button style="margin-left: 150px;" onClick={ handleSubmit }>Save</button>
				<button style="margin-left: 150px;" onClick={ this.handleClick }>Status: {status}</button>
				<div class={ this.state.showPublish ? style.visible : style.hidden }>
					<div>Schedule Publish: No schedule</div>
					<button name="status" value={status} onClick={ this.updateStatus }>{ status === 'draft' ? 'Publish' : 'Republish' }</button>
					<button class={ status === 'draft' ? style.hidden : style.visible } name="status" value={status} onClick={ this.updateStatus }>Unpublish</button>
				</div>
			</div>
		)
	}

}

export default Toolbar;
