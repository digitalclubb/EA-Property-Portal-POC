import { h, Component } from 'preact';
import style from './style';

import Input from '../../elements/input';

class Search extends Component {

	render({ handleChange, searchTerm }) {
		return ( 
			<div class={style.search}>
				<Input htmlClass="input input--shortest" label="Search" id="search" name="search" type="text" handleChange={ handleChange } value={ searchTerm } />
			</div>
		)
	}
};

export default Search;
