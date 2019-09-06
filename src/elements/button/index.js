import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Button = ({ href, label }) => {
	return (
		<Link class="button" href={ href }>{ label }</Link>
	)
}

export default Button;
