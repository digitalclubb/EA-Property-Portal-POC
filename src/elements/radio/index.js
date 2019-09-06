import { h, Component } from 'preact';
import style from './style';

const Radio = ({ id, name, label, checked }) => {
	return (
		<div class="radio">
			<input class="radio__input" id={ id } name={ name } type="radio" checked={ checked } value={ id } /> 
			<label class="radio__label" for={ id }>{ label }</label>
		</div>
	)
} 

export default Radio;
