import { h } from 'preact'
import Router from 'preact-router'

import Table from '../routes/table';
import Edit from '../routes/edit';

export default () => (
    <Router>
        <Table path="/" />
        <Edit path="/edit/:id" />
    </Router>
)
