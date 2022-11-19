import React from 'react';

type CounterBoardPropsType = {
    countNumber: number
    maxValue: number
}

const CounterBoard = (props: CounterBoardPropsType) => {
    return (
        <div className={'counter-section'}>
            <span className={props.countNumber === props.maxValue ? 'button-max' : ''}>{props.countNumber}</span>
        </div>
    );
}

export default CounterBoard;