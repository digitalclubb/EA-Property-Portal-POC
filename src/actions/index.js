const actions = store => ({
    updateProperties: ( state, data )  => {
		return {
			...state.list, 
			...data
		};
    }
});

export default actions;
