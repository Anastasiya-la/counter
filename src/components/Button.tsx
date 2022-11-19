import React from 'react';

type ButtonPropsType = {
    name: string
    callback: () => void
    disabled?: boolean
}

const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callback();
    }

    return (
        <div>
            <button onClick={onClickHandler} disabled={props.disabled}>{props.name} </button>
        </div>
    );
}

export default Button;