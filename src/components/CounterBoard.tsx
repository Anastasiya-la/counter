import React from 'react';

type CounterBoardPropsType = {
    countNumber: number
    maxValue: number
    error: boolean
    isValueChanging: boolean
}

const CounterBoard = (props: CounterBoardPropsType) => {
    return (
        <div className={'counter-section'}>
            {props.error ? <span className={'error-message'}>Incorrect Value!</span> : props.isValueChanging ?
                <span>enter values and press 'set'</span> :
                <span className={props.countNumber === props.maxValue ? 'button-max' : ''}>{props.countNumber}</span>
            }

        </div>
    );
}

export default CounterBoard;