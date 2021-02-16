export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR_DISPLAY = "CLEAR_DISPLAY"

export const MEMORY_VALUE_SET = "MEMORY_VALUE_SET" 
export const MEMOM_SWAP = "MEMOM_SWAP"
export const MEM_CLEAR = "MEM_CLEAR"


export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (opp) => {
    return({type: CHANGE_OPERATION, payload: opp})
}

export const clearDisplay = () => {
    return({type: CLEAR_DISPLAY})
}

export const memorySetValue = () => {
    return({type: MEMORY_VALUE_SET})
}

export const memorySwap = () => {
    return({type: MEMOM_SWAP})
}

export const memoryClear = () => {
    return({type: MEM_CLEAR})
}

export default {
    addOne,
    applyNumber,
    changeOperation,
    clearDisplay,
    memorySetValue,
    memorySwap,
    memoryClear
}