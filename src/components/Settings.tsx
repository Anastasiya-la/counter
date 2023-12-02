import React, {useState} from 'react';
import SettingBoard from "./SettingBoard";
import Button from "./Button";

type SettingsPropsType = {
    setValues: (min: number, max: number) => void
    minValue: number
    maxValue: number
    setIsValueChanging: () => void
    setError: (error: boolean) => void
    error: boolean
}

const Settings = (props: SettingsPropsType) => {




// two states for min and max values locally
    const [min, setMin] = useState(props.minValue)
    const [max, setMax] = useState(props.maxValue)
    const handleSetClicked = () => {
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
                setError={props.setError}
                error={props.error}
            />
            <div className={'buttons-section'}>
                <Button name={'set'} callback={handleSetClicked} disabled={props.error}/>
            </div>

        </div>
    )
}

export default Settings;


