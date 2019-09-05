import { h } from 'preact';
import { connect } from 'unistore/preact';
import actions from '../../actions';

import FormCreate from '../../components/form-create';
import Sidebar from '../../components/sidebar';

const Create = connect( ['list'], actions )( ({ list, updateProperties }) => (
	<div>
		<FormCreate { ...{ list, updateProperties } } />
		<Sidebar />
	</div>
));

export default Create;
