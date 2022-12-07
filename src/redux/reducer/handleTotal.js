const total = '';

const handleTotal = (state = total, action) => {
    switch (action.type) {
        case 'SETTOTAL':
            let newState = { ...state };
            newState = Number(state) + action.payload;
            return newState.toFixed(2);
            break;

        case 'REDUCETOTAL':
            let reduceState = { ...state };
            if (state >= 0) {
                reduceState = Number(state) - action.payload;
                return reduceState.toFixed(2);
            }
    
        default:
            return state;
            break;
    }
}


export default handleTotal