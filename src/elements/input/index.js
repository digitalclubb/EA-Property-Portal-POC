import { h, Component } from 'preact';
import style from './style';

const Input = ({ htmlClass, label, id, name, type, value, handleChange }) => {
	return (
		<div class='form-group'>
			<label class="label" for={ id }>{ label }</label>
			<input class={ htmlClass } id={ id } name={ name } type={ type } value={ value } onChange={ handleChange } />
		</div>
	)
}

export default Input;
