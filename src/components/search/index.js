import { h, Component } from 'preact';
import style from './style';

class Search extends Component {

	render({ handleChange, searchTerm }) {
		return ( 
			<div class={style.search}>
				<div class="container">
					<label class={style.search__label} for="search">Search property</label>
					<input class={style.search__input} id="search" name="search" type="text" value={ searchTerm } onChange={ handleChange } onKeyDown={ handleChange } />
				</div>
			</div>
		)
	}
};

export default Search;
