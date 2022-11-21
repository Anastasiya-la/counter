import React from 'react';
import CounterBoard from "./CounterBoard";
import Button from "./Button";

type CounterPropsType = {
    countNumber: number
    addNumber: () => void
    resetNumber: () => void
    maxValue: number
    minValue: number
    error: boolean
    isSetClicked: boolean
}

const Counter = (props: CounterPropsType) => {
    return (
        <div className={'main-section'}>
            <CounterBoard countNumber={props.countNumber} maxValue={props.maxValue} error={props.error}
                          isSetClicked={props.isSetClicked}/>
            <div className={'buttons-section'}>
                <Button name={'inc'} callback={props.addNumber} disabled={props.countNumber === props.maxValue}/>
                <Button name={'reset'} callback={props.resetNumber} disabled={props.countNumber === props.minValue}/>
            </div>
        </div>
    );
}

export default Counter;