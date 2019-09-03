import { h } from 'preact';
import { connect } from 'unistore/preact'

import actions from '../../actions'
import List from '../../components/list'

const Create = connect( 'list', actions )( ({ addTodo, list }) => (
	<List { ...{ addTodo,list } } />
));

export default Create;
