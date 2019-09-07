import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

import Button from '../../elements/button';

const Header = () => {
	return (
		<header class={style.header}>
			<div class="container">
				<h1 class={style.header__heading}>
					<Link class={ style.header__link } href="/">EA Property Portal</Link>
				</h1>
				<Button href="/create" label="Create" />
			</div>
		</header>
	)
};

export default Header;
