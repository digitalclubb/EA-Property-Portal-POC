import createStore from 'unistore';

// TODO: This would be fetched from an external API
import db from './db.js';

const initialState = {
    list: db.properties
}

const store = createStore( initialState );

export default store;
