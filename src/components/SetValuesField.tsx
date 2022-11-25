import React, {ChangeEvent} from 'react';

type SetValuesFieldPropsType = {
    title: string
    inputValue: number
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    errorValue: boolean
    error: boolean
}


const SetValuesField = (props: SetValuesFieldPropsType) => {
    return (
        <div className={'value'}>
            <span>{props.title}: </span>
            <div>
                <input type={'number'} value={props.inputValue} onChange={props.onChangeHandler}
                       className={`input-set ${props.errorValue ? 'error' : '' || props.error ? 'error' : ''}`}/>
            </div>
        </div>
    )
}

export default SetValuesField;