import { h, Component } from 'preact';
import style from './style';

const Checkbox = ({ label, id, name, value, checked }) => {
	return (
		<div class="checkbox">
			<input class="checkbox__input" type="checkbox" id={ id } name={ name } value={ value } checked={ checked } />
			<label class="checkbox__label" for={ id }>{ label }</label>
		</div>
	)
}

export default Checkbox;
