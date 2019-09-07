import { h } from 'preact'
import Router from 'preact-router'

import Table from '../routes/table';
import Create from '../routes/create';
import Edit from '../routes/edit';

export default () => (
    <Router>
        <Table path="/" />
		<Create path="/create" />
        <Edit path="/edit/:id" />
    </Router>
)
