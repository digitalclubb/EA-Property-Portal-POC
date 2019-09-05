import { h, Component } from 'preact';
import style from './style';

const Input = ({ label, htmlClass, id, name, type, value, handleChange }) => {
	return (
		<div class="form-group">
			<label class="label" for={ id }>{ label }</label>
			<input class={ htmlClass } id={ id } name={ name } type={ type } value={ value } onChange={ handleChange } />
		</div>
	)
}

export default Input;
