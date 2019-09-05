const actions = store => ({
    updateProperties: ( state )  => {
		return state;
	},
	
	createProperty: ( state, data ) => {
		return {
			...state,
			list: [ ...state.list, ...data ]
		}
	}
});

export default actions;
