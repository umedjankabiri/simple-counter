import React, {useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Display} from "./components/Display";

function App() {
   const [counter, setCounter] = useState(0)
   const MAXVALUE = 5; const MINVALUE = 0;
   const onClickPlus = () => {
      const newCounter = counter;
      newCounter < MAXVALUE && setCounter(newCounter + 1)
   }
   const onClickMinus = () => {
      const newCounter = counter;
      newCounter > MINVALUE && setCounter(newCounter - 1)
   }
   const onClickClear = () => {
      setCounter(MINVALUE);
   }
   const isButtonDisablePlus = counter >= MAXVALUE;
   const isButtonDisableMinus = counter <= MINVALUE;

   return (
      <div className="App">
         <div className="wrapper">
            <div className="main-display">
               <Display name={counter} className={counter === MAXVALUE ? "display" : ""}/>
            </div>
            <div className="Buttons">
               <Button name="Plus" onClick={onClickPlus} isDisable={isButtonDisablePlus} />
               <Button name="Minus" onClick={onClickMinus} isDisable={isButtonDisableMinus} />
               <Button name="Clear" onClick={onClickClear} isDisable={isButtonDisableMinus} />
            </div>
         </div>
      </div>
   );
}
export default App;
