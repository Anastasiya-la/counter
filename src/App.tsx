import React, {useState} from 'react';
import './App.css';
import Settings from "./components/Settings";
import Counter from "./components/Counter";
import {addNumberAC, resetNumberAC, setIsValueChangingAC, setValuesAC} from "./state/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppType} from "./state/store";

export type AppStateType = {
    count: number
    maxValue: number
    minValue: number
    isValueChanging: boolean

}


function App() {
    const counter = useSelector<AppType, AppStateType>(state => state.counter)

    let [error, setError] = useState(false)

    const dispatch = useDispatch();

    const addNumber = () => {
        dispatch(addNumberAC())

    }
    const resetNumber = () => {
        dispatch(resetNumberAC())
    }


    const setValues = (min: number, max: number) => {
        dispatch(setValuesAC(min, max))

    }
    const setIsValueChanging = () => {
        dispatch(setIsValueChangingAC())
    }


    return (
        <div className={'counterBlock'}>
            <Settings setValues={setValues}
                      minValue={counter.minValue}
                      maxValue={counter.maxValue}
                      setIsValueChanging={setIsValueChanging} setError={setError} error={error}/>
            <Counter countNumber={counter.count} addNumber={addNumber} resetNumber={resetNumber}
                     maxValue={counter.maxValue}
                     minValue={counter.minValue} error={error} isValueChanging={counter.isValueChanging}/>
        </div>
    );
}


export default App;
