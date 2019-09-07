import { h } from 'preact';
import { connect } from 'unistore/preact';
import actions from '../../actions';

import Form from '../../components/form';
import Sidebar from '../../components/sidebar';

const Create = connect( ['list'], actions )( ({ list, updateProperties, createProperty }) => (
	<div>
		<Form { ...{ list, updateProperties, createProperty } } />
		<Sidebar />
	</div>
));

export default Create;
