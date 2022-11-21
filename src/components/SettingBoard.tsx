import React, {ChangeEvent} from 'react';

type SettingBoardType = {
    maxValue: number
    minValue: number
    changeMaxValue: (value: number) => void
    changeMinValue: (value: number) => void
    setIsValueChanging: (value: boolean) => void

}

const SettingBoard = (props: SettingBoardType) => {


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
                           className={'input-set'}/>
                </div>
            </div>
            <div className={'value'}>
                <span>start value: </span>
                <input type={'number'} value={props.minValue} onChange={onChangeMinHandler} className={'input-set'}/>
            </div>

        </div>
    )
}

export default SettingBoard;