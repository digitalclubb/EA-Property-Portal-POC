import { h, Component } from 'preact';
import style from './style';

const Textarea = ({ label, id, rows, name, value, handleChange }) => {
	return (
		<div class="form-group">
			<label class="label" for={ id }>{ label }</label>
			<textarea class="textblock" id={ id } rows={ rows } name={ name} onChange={ handleChange }>{ value }</textarea>
		</div>
	)
}

export default Textarea;
