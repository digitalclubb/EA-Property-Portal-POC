import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<div class="container">
			<h1 class={style.header__heading}>Property Portal</h1>
			<Link activeClassName={style.active} href="/create">Create</Link>
			<Link activeClassName={style.active} href="/logout">Logout</Link>
		</div>
	</header>
);

export default Header;
