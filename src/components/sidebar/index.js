import { h } from 'preact';
import style from './style';

const Sidebar = ({ id }) => (
	<aside class={style.sidebar}>
		<nav>
			<ul>
				<li>
					<a class={style.sidebar__link} href="#title">
						<img class={style.sidebar__link_icon} src="/assets/title.svg" alt="" />
						<span class={style.sidebar__link_text}>Title</span>
					</a>
				</li>
				<li>
					<a class={style.sidebar__link} href="#address">
						<img class={style.sidebar__link_icon} src="/assets/address.svg" alt="" />
						<span class={style.sidebar__link_text}>Address</span>
					</a>
				</li>
				<li>
					<a class={style.sidebar__link} href="#description">
						<img class={style.sidebar__link_icon} src="/assets/description.svg" alt="" />
						<span class={style.sidebar__link_text}>Description</span>
					</a>
				</li>
				<li>
					<a class={style.sidebar__link} href="#photos">
						<img class={style.sidebar__link_icon} src="/assets/photos.svg" alt="" />
						<span class={style.sidebar__link_text}>Photos</span>
					</a>
				</li>
				<li>
					<a class={style.sidebar__link} href="#floorplan">
						<img class={style.sidebar__link_icon} src="/assets/floorplan.svg" alt="" />
						<span class={style.sidebar__link_text}>Floorplan</span>
					</a>
				</li>
				<li>
					<a class={style.sidebar__link} href="#price">
						<img class={style.sidebar__link_icon} src="/assets/price.svg" alt="" />
						<span class={style.sidebar__link_text}>Price</span>
					</a>
				</li>
				<li>
					<a class={style.sidebar__link} href="#schedule">
						<img class={style.sidebar__link_icon} src="/assets/publish.svg" alt="" />
						<span class={style.sidebar__link_text}>Publish settings</span>
					</a>
				</li>
				<li>
					<a class={style.sidebar__link} href="#notes">
						<img class={style.sidebar__link_icon} src="/assets/notes.svg" alt="" />
						<span class={style.sidebar__link_text}>Notes</span>
					</a>
				</li>
			</ul>
		</nav>
	</aside>
);

export default Sidebar;
