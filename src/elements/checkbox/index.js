import { h, Component } from 'preact';

const Checkbox = ({ label, id, name, value, checked, handleChange }) => {
	return (
		<div class="form-checkbox">
			<input class="checkbox" id={ id } name={ name } type="checkbox" value={ value } checked={ checked } />
			<label class="label-inline" for={ id }>{ label }</label>
		</div>
	)
}

export default Checkbox;
