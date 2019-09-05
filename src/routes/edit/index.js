import { h } from 'preact';
import { connect } from 'unistore/preact';
import actions from '../../actions';

import FormEdit from '../../components/form-edit';
import Sidebar from '../../components/sidebar';

const Edit = connect( ['list'], actions )( ({ id, list, updateProperties }) => (
	<div>
		<FormEdit { ...{ id,list, updateProperties } } />
		<Sidebar />
	</div>
));

export default Edit;
