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

	render({ handleSubmit, handleNewSubmit, status, newProperty }) {

		// Change event handler if it's new or existing
		let eventHandler = handleSubmit;
		if ( newProperty ) {
			eventHandler = handleNewSubmit;
		}

		return (
			<div class={style.toolbar}>
				<div class={'container ' + style.toolbar__wrap}>

					<div class={style.toolbar__buttons}>

						{/* Save button */}
						<button class={style.toolbar__button} onClick={ eventHandler }>Save</button>

						{/* Trigger visibility of publish button modal */}
						<button class={style.toolbar__status} onClick={ this.handleClick }>Status: <span class={style.tooldbar__status_current}>{status}</span></button>
					</div>

					{/* Publish button modal */}
					<div class={`${style.toolbar__modal} ${ this.state.showPublish ? 'visible' : 'hidden' }`}>
						<h4 class={style.toolbar__heading}>Publish Property</h4>
						<div class={style.toolbar__label}>Schedule: <span class={style.toolbar__setting}>No schedule</span></div>
						<button class={style.toolbar__publish} name="status" value={status} onClick={ this.updateStatus }>{ status === 'draft' ? 'Publish' : 'Republish' }</button>
						<button class={`${style.toolbar__unpublish} ${status === 'draft' ? 'hidden' : 'visible'}`} name="status" value={status} onClick={ this.updateStatus }>Unpublish</button>
					</div>
				</div>
			</div>
		)
	}

}

export default Toolbar;
