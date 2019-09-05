import { h } from 'preact';
import style from './style';

import Input from '../../elements/input';

const Search = () => (
	<div class={style.search}>
		<Input label="Search" id="search" name="search" type="text" handleChange={ this.handleChange }  />
	</div>
);

export default Search;
