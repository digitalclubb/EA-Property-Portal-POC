import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import Button from '../../elements/button';

class Header extends Component {

	constructor() {
		super();
		// We need to generate a unique ID as it's a new property
		this.uuid = this.generateID();
	}

	// TODO: Crude. Not checking existing IDs for now (should be a service)
	generateID() {
		return Math.floor( 1000 + Math.random() * 9000 );
	}

	render() {
		return (
		<header class={style.header}>
			<div class="container">
				<h1 class={style.header__heading}>
					<Link class={ style.header__link } href="/">EA Property Portal</Link>
				</h1>
				<Button href={'/edit/' + this.uuid} label="Create" />
			</div>
		</header>
		)
	}
};

export default Header;
