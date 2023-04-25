import {AppStateType} from "../App";

type AddNumberACType = ReturnType<typeof addNumberAC>
type ResetNumberACType = ReturnType<typeof resetNumberAC>
type SetValuesACType = ReturnType<typeof setValuesAC>
type SetIsValueChangingACType = ReturnType<typeof setIsValueChangingAC>

type ActionsType = AddNumberACType | ResetNumberACType | SetValuesACType | SetIsValueChangingACType;


const initialState: AppStateType = {
    count: 0,
    maxValue: 5,
    minValue: 0,
    isValueChanging: false
}

/*
const initialState: AppStateType = {
    count: 0,
    maxValue: 5,
    minValue: 0,
    isValueChanging: false
}
*/


export const counterReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
    switch (action.type) {
        case 'ADD-NUMBER':
            if (state.count < state.maxValue) {
                return {...state, count: state.count + 1}
            } else {
                return state
            }
        case 'RESET-NUMBER':
            return {...state, count: state.minValue};
        case 'SET-VALUES-TO-SETTINGS' :
            return {
                ...state,
                isValueChanging: false,
                minValue: action.min,
                maxValue: action.max,
                count: action.min
            }
        case 'SET-VALUE-CHANGING':
            return {...state, isValueChanging: true}
        default :
            return state;

    }
}


export const addNumberAC = () => {
    return {
        type: 'ADD-NUMBER'
    } as const
}

export const resetNumberAC = () => {
    return {
        type: 'RESET-NUMBER'
    } as const
}

export const setValuesAC = (min: number, max: number) => {
    return {
        type: 'SET-VALUES-TO-SETTINGS',
        min: min,
        max: max
    } as const
}
export const setIsValueChangingAC = () => {
    return {
        type: 'SET-VALUE-CHANGING'
    } as const
}


export default counterReducer;