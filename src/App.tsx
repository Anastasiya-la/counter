import React, {useEffect, useState} from 'react';
import './App.css';
import Settings from "./components/Settings";
import Counter from "./components/Counter";

function App() {
    let [count, setCount] = useState<number>(0)
    let [maxValue, setMaxValue] = useState(5)
    let [minValue, setMinValue] = useState(0)
    let [error, setError] = useState(false)
    let [isValueChanging, setIsValueChanging] = useState(false)

    let addNumber = () => {
        if (count < maxValue) {
            setCount(++count);
        }

    }
    const resetNumber = () => {
        setCount(minValue)
    }


    const setValues = (min: number, max: number) => {
        localStorage.setItem('counterMax', JSON.stringify(max))
        localStorage.setItem('counterMin', JSON.stringify(min))
        setIsValueChanging(false)
        setMinValue(min)
        setMaxValue(max)
        setCount(min)
    }

    useEffect(() => {
        const counterMaxValue = localStorage.getItem('counterMax')
        const counterMinValue = localStorage.getItem('counterMin')
        if (counterMaxValue && counterMinValue) {
            setMinValue(JSON.parse(counterMinValue))
            setMaxValue(JSON.parse(counterMaxValue))
            setCount(JSON.parse(counterMinValue))

        }
    }, [])


    return (
        <div>
            <Settings setValues={setValues}
                      minValue={minValue}
                      maxValue={maxValue}
                      setIsValueChanging={setIsValueChanging}/>
            <Counter countNumber={count} addNumber={addNumber} resetNumber={resetNumber} maxValue={maxValue}
                     minValue={minValue} error={error} isValueChanging={isValueChanging}/>
        </div>

    );
}

export default App;
