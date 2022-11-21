import React, {useEffect, useState} from 'react';
import SettingBoard from "./SettingBoard";
import Button from "./Button";

type SettingsPropsType = {
    setValues: (min: number, max: number) => void
    minValue: number
    maxValue: number
    setIsValueChanging: (value: boolean) => void
}

const Settings = (props: SettingsPropsType) => {

    useEffect(() => {
        const maxValue = localStorage.getItem('maxValue')
        const minValue = localStorage.getItem('minValue')
        if (maxValue && minValue) {
            setMin(JSON.parse(minValue))
            setMax(JSON.parse(maxValue))

        }
    }, [])
// two states for min and max values locally
    const [min, setMin] = useState(props.minValue)
    const [max, setMax] = useState(props.maxValue)
    const handleSetClicked = () => {
        localStorage.setItem('maxValue', JSON.stringify(max))
        localStorage.setItem('minValue', JSON.stringify(min))
        props.setValues(min, max)
    }

    return (
        <div className={"main-section"}>
            <SettingBoard
                // pass local values and setters
                changeMaxValue={setMax}
                changeMinValue={setMin}
                minValue={min}
                maxValue={max}
                setIsValueChanging={props.setIsValueChanging}
            />
            <div className={'buttons-section'}>
                <Button name={'set'} callback={handleSetClicked}/>
            </div>

        </div>
    )
}

export default Settings;