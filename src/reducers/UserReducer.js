const initialState = {
    name: 'Visitante',
    contador: 0,
};

const UserReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_NAME':
            state = { ...state, name: action.payload.name };
            break;

        case 'SET_CONTADOR':
            let newCount = state.contador + 1;
            state = { ...state, contador: newCount }
            break;
        
        default:
            return state;
    }

    return state;
}

export default UserReducer;