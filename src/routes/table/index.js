import { h } from 'preact';
import { connect } from 'unistore/preact'
import actions from '../../actions'

import List from '../../components/list';

const Table = connect( 'list', actions )( ({ list }) => (
	<List properties={ list } />
));

export default Table;
