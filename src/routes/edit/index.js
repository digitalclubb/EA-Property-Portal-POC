import { h } from 'preact';
import style from './style';

import Toolbar from '../../components/toolbar';
import Sidebar from '../../components/sidebar';

const Edit = ({ id }) => (
	<div>
		<Toolbar />
		<article class={style.article}>
			<section id="address" class="section">
				<fieldset class="fieldset">
					<legend class="legend">
						<h3>Address</h3>
					</legend>

					<div class="form-group">
						<label class="label" for="address-line-1">Building and street</label>
						<input class="input" id="address-line-1" name="address-line-1" type="text" value={id} />
					</div>

					<div class="form-group">
						<input class="input" id="address-line-2" name="address-line-2" type="text" />
					</div>

					<div class="form-group">
						<label class="label" for="address-town">Town or city</label>
						<input class="input input--short" id="address-town" name="address-town" type="text" />
					</div>

					<div class="form-group">
						<label class="label" for="address-county">County</label>
						<input class="input input--short" id="address-county" name="address-county" type="text" />
					</div>

					<div class="form-group">
						<label class="label" for="address-postcode">Postcode</label>
						<input class="input input--shortest" id="address-postcode" name="address-postcode" type="text" />
					</div>
				</fieldset>
			</section>
			<section id="description" class="section">
				<fieldset class="fieldset">
					<legend class="legend">
						<h3>Property Description</h3>
					</legend>

					<div class="form-group">
						<label class="label" for="property">Type</label>
						<input class="input input--shortest" id="property" name="property" type="text" />
					</div>

					<div class="form-group">
						<label class="label" for="bedrooms">Number of bedrooms</label>
						<input class="input input--shortest" id="bedrooms" min="1" max="100" name="bedrooms" type="number" />
					</div>

					<div class="form-group">
						<label class="label" for="features">Key features</label>
						<input class="input input--shortest" id="features" name="features" type="text" />
						Add feature
					</div>

					<div class="form-group">
						<label class="label" for="description">Description</label>
						<textarea class="textblock" id="description" rows="10" name="description"></textarea>
					</div>
				</fieldset>
			</section>
			<section id="photos" class="section">
				<fieldset class="fieldset">
					<legend class="legend">
						<h3>Photos</h3>
					</legend>

					
				</fieldset>
			</section>
			<section id="floorplan" class="section">
				<fieldset class="fieldset">
					<legend class="legend">
						<h3>Floorplan</h3>
					</legend>

					
				</fieldset>
			</section>
			<section id="price" class="section">
				<fieldset class="fieldset">
					<legend class="legend">
						<h3>Price</h3>
					</legend>

					<div class="form-group">
						<label class="label" for="description">Current asking price</label>
						<input class="input input--shortest" id="address-postcode" name="address-postcode" type="text" />
					</div>
				</fieldset>
			</section>
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
			<section id="notes" class="section">
				<fieldset class="fieldset">
					<legend class="legend">
						<h3>Internal notes</h3>
					</legend>

					<div class="form-group">
						<label class="label" for="description">These notes are for your own records only</label>
						<textarea class="textblock" id="description" rows="5" name="description"></textarea>
					</div>
				</fieldset>
			</section>
		</article>
		<Sidebar />
	</div>
);

export default Edit;
