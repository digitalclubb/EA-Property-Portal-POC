import { h } from 'preact'
import Router from 'preact-router'

import List from '../routes/list';
import Create from '../routes/create';
import Edit from '../routes/edit';

export default () => (
    <Router>
        <List path="/" />
        <Create path="/create" />
        <Edit path="/edit/:id" />
    </Router>
)
