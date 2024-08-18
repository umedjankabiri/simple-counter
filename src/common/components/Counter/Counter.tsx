import {FC, useState} from 'react';
import 'components/Counter/counterStyles.css'
import {Button} from "components/Button/Button.tsx";
import {Display} from "components/Display/Display.tsx";

export const Counter: FC = () => {
    const maxValue = 5
    const minValue = 0
    const minusOne = -1
    const [counter, setCounter] = useState<number>(minValue)
    const [error, setError] = useState<string | null>(null)

    const onClickPlusHandler = () =>
        counter !== maxValue
            ? (setError(null), setCounter(prevCounter => prevCounter + 1))
            : setError(`Counter cannot be more then ${counter}`)
    const onClickMinusHandler = () =>
        counter !== minusOne
            ? (setError(null), setCounter(prevCounter => prevCounter - 1))
            : setError(`Counter cannot be less then ${counter}`)
    const onClickClearHandler = () => {
        setError(null)
        setCounter(minValue)
    }

    return (
        <div className={"counterWrapper"}>
            <div className={"displayWrapper"}>
                <Display className={counter === maxValue || counter === minusOne ? "lastDigit" : "basicDigit"} show={counter}/>
            </div>
            {error && <span className={"error"}>{error}</span>}
            <div className={"buttonsWrapper"}>
                <Button className={"plus"} disabled={!!error && counter === maxValue} onClick={onClickPlusHandler}>Plus</Button>
                <Button className={"minus"} disabled={!!error && counter === minusOne} onClick={onClickMinusHandler}>Minus</Button>
                <Button className={"zero"} disabled={counter === minValue} onClick={onClickClearHandler}>Clear</Button>
            </div>
        </div>
    );
};