import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, MEMORY_VALUE_SET, MEMOM_SWAP, MEM_CLEAR } from './../actions';

export const initialState = {
    total: 50,
    operation: "*",
    memory: 100
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
            
        case(CLEAR_DISPLAY):
            return({
                ...state,
                total: 0
            });

        case(MEMORY_VALUE_SET):
            return({
                ...state,
                memory: state.total + state.memory
            });

        case(MEMOM_SWAP):
            return({
                ...state,
                memory: state.total
            });

        case(MEM_CLEAR):
            return({
                ...state,
                memory: state.total * 0
            });

        default:
            return state;
    }
}

export default reducer;