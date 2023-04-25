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
    let counter = useSelector<AppType, AppStateType>(state => state)

    let [error, setError] = useState(false)

    let dispatch = useDispatch();
    /* let [count, setCount] = useState<number>(0)
     let [maxValue, setMaxValue] = useState(5)
     let [minValue, setMinValue] = useState(0)
     let [error, setError] = useState(false)
     let [isValueChanging, setIsValueChanging] = useState(false)*/
    /*
        useEffect(() => {
            const counterMaxValue = localStorage.getItem('counterMax')
            const counterMinValue = localStorage.getItem('counterMin')
            if (counterMaxValue && counterMinValue) {
                setMinValue(JSON.parse(counterMinValue))
                setMaxValue(JSON.parse(counterMaxValue))
                setCount(JSON.parse(counterMinValue))

            }
        }, [])*/


    const addNumber = () => {
        /*      if (count < maxValue) {
                  setCount(++count);
              }*/
        dispatch(addNumberAC())

    }
    const resetNumber = () => {
        /*    setCount(minValue)*/
        dispatch(resetNumberAC())
    }


    const setValues = (min: number, max: number) => {
        /*        localStorage.setItem('counterMax', JSON.stringify(max))
                localStorage.setItem('counterMin', JSON.stringify(min))*/
        /*  setIsValueChanging(false)
          setMinValue(min)
          setMaxValue(max)
          setCount(min)*/
        dispatch(setValuesAC(min, max))

    }
    const setIsValueChanging = () => {
        dispatch(setIsValueChangingAC())
    }

    return (
        <div>
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

/*function App() {
    let [counter, dispatchToCount] = useReducer(counterReducer, {
        count: 0,
        maxValue: 5,
        minValue: 0,
        error: false,
        isValueChanging: false
    })
    /!* let [count, setCount] = useState<number>(0)
     let [maxValue, setMaxValue] = useState(5)
     let [minValue, setMinValue] = useState(0)
     let [error, setError] = useState(false)
     let [isValueChanging, setIsValueChanging] = useState(false)*!/
    /!*
        useEffect(() => {
            const counterMaxValue = localStorage.getItem('counterMax')
            const counterMinValue = localStorage.getItem('counterMin')
            if (counterMaxValue && counterMinValue) {
                setMinValue(JSON.parse(counterMinValue))
                setMaxValue(JSON.parse(counterMaxValue))
                setCount(JSON.parse(counterMinValue))

            }
        }, [])*!/


    const addNumber = () => {
        /!*      if (count < maxValue) {
                  setCount(++count);
              }*!/
        dispatchToCount(addNumberAC())

    }
    const resetNumber = () => {
        /!*    setCount(minValue)*!/
        dispatchToCount(resetNumberAC())
    }


    const setValues = (min: number, max: number) => {
        /!*        localStorage.setItem('counterMax', JSON.stringify(max))
                localStorage.setItem('counterMin', JSON.stringify(min))*!/
        /!*  setIsValueChanging(false)
          setMinValue(min)
          setMaxValue(max)
          setCount(min)*!/
        dispatchToCount(setValuesAC(min, max))

    }


    return (
        <div>
            <Settings setValues={setValues}
                      minValue={minValue}
                      maxValue={maxValue}
                      setIsValueChanging={setIsValueChanging} setError={setError} error={error}/>
            <Counter countNumber={count} addNumber={addNumber} resetNumber={resetNumber} maxValue={maxValue}
                     minValue={count.minValue} error={count.error} isValueChanging={isValueChanging}/>
        </div>

    );
}*/
export default App;
