import {functionalNumNames, operators} from "./functionalCalculator";
import CalculatorButton from "./CalculatorButton";

const Calculator = ({handleNumberClick, handleOperatorClick, handleEqualsClick, handleClearClick, setSymbol, numbersAsDigits, operatorsAsSymbols}) => {

    //TODO add styling and differentiate between buttons
    //TODO grid it

    return (
        <>
            {Object.keys(functionalNumNames).map((key) => (
                <CalculatorButton
                    key={key}
                    buttonFunction={functionalNumNames[key]}
                    name={numbersAsDigits[key]}
                    handleButtonClick={handleNumberClick}
                    number
                />
            ))}
            {Object.keys(operators).map((key) => (
                <CalculatorButton
                    key={key}
                    buttonFunction={operators[key]}
                    name={operatorsAsSymbols[key]}
                    handleButtonClick={handleOperatorClick}
                    setSymbol={setSymbol}
                />
            ))}
            <CalculatorButton
                name="="
                handleButtonClick={handleEqualsClick}
                setSymbol={setSymbol}
            />
            <CalculatorButton
                name="clear"
                handleButtonClick={handleClearClick}
                clear
            />
        </>
    )
}

export default Calculator;