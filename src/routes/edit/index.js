import { h } from 'preact';
import { connect } from 'unistore/preact';
import actions from '../../actions';

import Form from '../../components/form';
import Sidebar from '../../components/sidebar';

const Edit = connect( ['list'], actions )( ({ id, list, updateProperties, createProperty }) => (
	<div>
		<Form { ...{ id,list, updateProperties, createProperty } } />
		<Sidebar />
	</div>
));

export default Edit;
