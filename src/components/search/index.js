import { h } from 'preact';
import style from './style';

const Search = () => (
	<div class={style.search}>
		Search:
        <input type="text" placeholder="Address or post code" />
	</div>
);

export default Search;
