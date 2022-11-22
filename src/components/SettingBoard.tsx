import React, {ChangeEvent, useEffect} from 'react';

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
            if (props.minValue < 0 || props.minValue === props.maxValue || props.maxValue < 1 || props.minValue > props.maxValue) {
                props.setError(true)
            } else {
                props.setError(false)
            }
        }
        changeError()

    }, [props.minValue, props.maxValue])

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
            <div className={'value'}>
                <span>max value: </span>
                <div>
                    <input type={'number'} value={props.maxValue} onChange={onChangeMaxHandler}
                           className={`input-set ${errorMax ? 'error' : '' || error ? 'error' : ''}`}/>


                </div>
            </div>
            <div className={'value'}>
                <span>start value: </span>
                <input type={'number'} value={props.minValue} onChange={onChangeMinHandler}
                       className={`input-set ${errorMin ? 'error' : '' || error ? 'error' : ''}`}/>
            </div>

        </div>
    )
}

export default SettingBoard;