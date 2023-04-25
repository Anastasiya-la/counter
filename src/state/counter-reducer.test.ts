import {AppStateType} from "../App";
import counterReducer, {addNumberAC, resetNumberAC, setValuesAC} from "./counter-reducer";

test('add number to the counter', () => {
    const startState: AppStateType = {
        count: 0,
        maxValue: 5,
        minValue: 0,
        isValueChanging: false
    }

    const action = addNumberAC();
    const endState = counterReducer(startState, action);

    expect(endState.count).toBe(1)
    expect(startState.count).toBe(0)

})

test('reset number at the counter', () => {
    const startState: AppStateType = {
        count: 2,
        maxValue: 5,
        minValue: 0,
        isValueChanging: false
    }

    const action = resetNumberAC();
    const endState = counterReducer(startState, action);

    expect(endState.count).toBe(endState.minValue)
    expect(startState.count).toBe(2)

})

test('setting values to settings', () => {
    const startState: AppStateType = {
        count: 0,
        maxValue: 5,
        minValue: 0,
        isValueChanging: true
    }

    const action = setValuesAC(4, 10);
    const endState = counterReducer(startState, action);

    expect(endState.count).toBe(endState.minValue)
    expect(endState.count).toBe(4)
    expect(endState.minValue).toBe(4)
    expect(endState.maxValue).toBe(10)
    expect(startState.count).toBe(0)
    expect(startState.minValue).toBe(0)
    expect(startState.maxValue).toBe(5)
    expect(endState.isValueChanging).toBe(false)

})