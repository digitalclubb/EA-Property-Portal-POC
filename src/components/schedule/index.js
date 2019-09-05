import { h } from 'preact';

const Schedule = () => {
	return (
		<section id="schedule" class="section">
			schedule: 
			expired:
			<fieldset class="fieldset">
				<legend class="legend">
					<h3>Publish settings</h3>
				</legend>

				<div class="form-group">
					<div class="label">Schedule</div>
					<label class="label-group">
						<input class="" name="schedule" type="radio" />
						No schedule
					</label>
					<label class="label-group">
						<input class="" name="schedule" type="radio" />
						Schedule start
					</label>
				</div>

				<div class="form-group">
					<div class="label">Active portals</div>
					<span class="hint">Select all that apply.</span>
					<div class="form-checkbox">
						<input class="checkbox" id="onthemarket" name="onthemarket" type="checkbox" value="onthemarket" />
						<label class="label-inline" for="onthemarket">On The Market</label>
					</div>
					<div class="form-checkbox">
						<input class="checkbox" id="primelocation" name="primelocation" type="checkbox" value="primelocation" />
						<label class="label-inline" for="primelocation">Primelocation</label>
					</div>
					<div class="form-checkbox">
						<input class="checkbox" id="rightmove" name="rightmove" type="checkbox" value="rightmove" />
						<label class="label-inline" for="rightmove">Rightmove</label>
					</div>
					<div class="form-checkbox">
						<input class="checkbox" id="zoopla" name="zoopla" type="checkbox" value="zoopla" />
						<label class="label-inline" for="zoopla">Zoopla</label>
					</div>
				</div>
			</fieldset>
		</section>
	)
}

export default Schedule;
