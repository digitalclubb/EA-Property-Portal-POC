import { h } from 'preact';
import style from './style';

const Sidebar = ({ id }) => (
	<aside class={style.sidebar}>
		<nav>
			<ul>
				<li>
					<a class={style.sidebar__link} href="#title">Title</a>
				</li>
				<li>
					<a class={style.sidebar__link} href="#address">Address</a>
				</li>
				<li>
					<a class={style.sidebar__link} href="#description">Description</a>
				</li>
				<li>
					<a class={style.sidebar__link} href="#photos">Photos</a>
				</li>
				<li>
					<a class={style.sidebar__link} href="#floorplan">Floorplan</a>
				</li>
				<li>
					<a class={style.sidebar__link} href="#price">Price</a>
				</li>
				<li>
					<a class={style.sidebar__link} href="#schedule">Publish settings</a>
				</li>
				<li>
					<a class={style.sidebar__link} href="#notes">Notes</a>
				</li>
			</ul>
		</nav>
	</aside>
);

export default Sidebar;
