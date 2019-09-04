import { h } from 'preact';
import { connect } from 'unistore/preact'
import actions from '../../actions'

import Toolbar from '../../components/toolbar';
import Form from '../../components/form';
import Sidebar from '../../components/sidebar';

const Edit = connect( ['list'], actions )( ({ id, list, updateProperties }) => (
	<div>
		<Toolbar />
		<Form { ...{ id,list, updateProperties } } />
		<Sidebar />
	</div>
));

export default Edit;
