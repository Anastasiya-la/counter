import React from 'react';

type CounterBoardPropsType = {
    countNumber: number
    maxValue: number
    error: boolean
    isSetClicked: boolean
}

const CounterBoard = (props: CounterBoardPropsType) => {
    return (
        <div className={'counter-section'}>
            {props.error ? <span>Incorrect Value!</span> : props.isSetClicked ?
                <span>enter values and press 'set'</span> :
                <span className={props.countNumber === props.maxValue ? 'button-max' : ''}>{props.countNumber}</span>
            }

        </div>
    );
}

export default CounterBoard;