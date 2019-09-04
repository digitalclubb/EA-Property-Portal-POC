import { h, Component } from 'preact';
import style from './style';

import Button from '../button';

class Toolbar extends Component {

	state = {

	}

	componentWillMount() {

	}

	render() {
		return (
			<div class={style.toolbar}>
				<div style="margin-left: 150px;">Save</div>
			</div>
		)
	}

}

export default Toolbar;
