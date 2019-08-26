import { h } from 'preact';


const Edit = ({ id }) => (
	<article>
		<section>
			<fieldset>
				<legend>
					<h1>Address</h1>
				</legend>

				<div>
					<label for="address-line-1">Building and street <span>line 1 of 2</span></label>
					<input id="address-line-1" name="address-line-1" type="text" value={id} />
				</div>

				<div>
					<label for="address-line-2"><span>Building and street line 2 of 2</span></label>
					<input id="address-line-2" name="address-line-2" type="text" />
				</div>

				<div>
					<label for="address-town">Town or city</label>
					<input id="address-town" name="address-town" type="text" />
				</div>

				<div>
					<label for="address-county">County</label>
					<input id="address-county" name="address-county" type="text" />
				</div>

				<div>
					<label for="address-postcode">Postcode</label>
					<input id="address-postcode" name="address-postcode" type="text" />
				</div>
			</fieldset>
		</section>
		<section>
			<h3>Images</h3>
		</section>
		<section>
			<h3>Description</h3>
		</section>
		<section>
			<h3>Number of bedrooms</h3>
		</section>
		<section>
			<h3>Property type</h3>
		</section>
		<section>
			<h3>Price</h3>
		</section>
		<section>
			<h3>Publish settings</h3>
		</section>
		<section>
			<h3>Internal notes</h3>
		</section>
	</article>
);

export default Edit;
