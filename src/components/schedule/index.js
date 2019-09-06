import { h, Component } from 'preact';

import Radio from '../../elements/radio';
import Checkbox from '../../elements/checkbox';

class Schedule extends Component {

	state = {
		portals: [
			{
				"id": "onthemarket",
				"title": "On The Market",
				"selected": false
			},
			{
				"id": "primelocation",
				"title": "Primelocation",
				"selected": false
			},
			{
				"id": "rightmove",
				"title": "Rightmove",
				"selected": false
			},
			{
				"id": "zoopla",
				"title": "Zoopla",
				"selected": false
			}
		]
	}

	componentWillMount() {
		const portals = this.props.portals;
		if ( portals ) {
			this.setState({
				portals: portals
			});
		}
	}

	// TODO: Not implemented for POC
	render() {
		return (
			<section id="schedule" class="section">
				<fieldset class="fieldset">
					<legend class="legend">
						<h3>Publish settings</h3>
					</legend>

					<div class="form-group">
						<div class="label">Schedule</div>
						<Radio id="no-schedule" name="schedule" label="No Schedule" checked="true" />
						<Radio id="schedule" name="schedule" label="Schedule start" />
					</div>

					<div class="form-group">
						<div class="label">Active portals</div>
						<span class="hint">Select all that apply.</span>

						{ this.state.portals && this.state.portals.map( portal => (
							<Checkbox label={ portal.title } id={ portal.id } name={ portal.id } value={ portal.id } checked={ portal.selected } />
						))}
					</div>
				</fieldset>
			</section>
		)
	}
}

export default Schedule;
