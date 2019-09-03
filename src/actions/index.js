const actions = store => ({
    addTodo: ( state, data )  => {
        return {
            ...state,
            list: [ ...state.list, data ]
        }
    }
});

export default actions;
