import createStore from 'unistore';
import persistStore from 'unissist';
import localStorageAdapter from 'unissist/integrations/localStorageAdapter';

// TODO: This would be fetched from an external API
import db from './db.js';

const initialState = {
	list: db.properties
}

const store = createStore( initialState );

// Persistence helper library with localStorage
const adapter = localStorageAdapter();
persistStore(store, adapter);

export default store;
