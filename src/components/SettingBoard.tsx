import React, {ChangeEvent, useEffect, useState} from 'react';
import SetValuesField from "./SetValuesField";

type SettingBoardType = {
    maxValue: number
    minValue: number
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
    setIsValueChanging: () => void
    setError: (error: boolean) => void
    error: boolean

}

const SettingBoard = (props: SettingBoardType) => {
    const errorMax = props.maxValue < 1;
    const errorMin = props.minValue < 0;
    const error = props.minValue === props.maxValue || props.minValue > props.maxValue;


    useEffect(() => {
        const changeError = () => {
            if (errorMin || error || errorMax) {
                props.setError(true)
            } else {
                props.setError(false)
            }
        }

        changeError()

    }, [errorMax, errorMin, error, props])

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setIsValueChanging();
        props.changeMaxValue(+e.currentTarget.value);
    }

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setIsValueChanging();
        props.changeMinValue(+e.currentTarget.value);

    }

    return (
        <div className={'set-section'}>
            <SetValuesField title={'max value'} onChangeHandler={onChangeMaxHandler} error={error}
                            inputValue={props.maxValue} errorValue={errorMax}/>
            <SetValuesField title={'min value'} onChangeHandler={onChangeMinHandler} error={error}
                            inputValue={props.minValue} errorValue={errorMin}/>
        </div>

    )
}


export default SettingBoard;


/*import React, {ChangeEvent, useEffect} from 'react';
import SetValuesField from "./SetValuesField";

type SettingBoardType = {
    maxValue: number
    minValue: number
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
    setIsValueChanging: (value: boolean) => void
    setError: (error: boolean) => void
    error: boolean

}

const SettingBoard = (props: SettingBoardType) => {
    const errorMax = props.maxValue < 1;
    const errorMin = props.minValue < 0;
    const error = props.minValue === props.maxValue || props.minValue > props.maxValue;


    useEffect(() => {
        const changeError = () => {
            if (errorMin || error || errorMax) {
                props.setError(true)
            } else {
                props.setError(false)
            }
        }

        changeError()

    }, [errorMax, errorMin, error, props])

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setIsValueChanging(true);
        props.changeMaxValue(+e.currentTarget.value);
    }

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setIsValueChanging(true);
        props.changeMinValue(+e.currentTarget.value);

    }

    return (
        <div className={'set-section'}>
            <SetValuesField title={'max value'} onChangeHandler={onChangeMaxHandler} error={error}
                            inputValue={props.maxValue} errorValue={errorMax}/>
            <SetValuesField title={'min value'} onChangeHandler={onChangeMinHandler} error={error}
                            inputValue={props.minValue} errorValue={errorMin}/>
        </div>

    )
}


export default SettingBoard;*/
