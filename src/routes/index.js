import { h } from 'preact'
import Router from 'preact-router'

import List from '../routes/list';
import Edit from '../routes/edit';

export default () => (
    <Router>
        <List path="/" />
        <Edit path="/edit/:id" />
    </Router>
)
