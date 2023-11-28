import {numbers, operators} from "./functionalCalculator";
import CalculatorButton from "./CalculatorButton";

const Calculator = ({ handleNumberClick, handleOperatorClick, handleEqualsClick, setSymbol }) => {

    //TODO make numbers digits
    //TODO add styling and differentiate between buttons
    //TODO grid it

    return (
        <>
            {Object.keys(numbers).map((key) => (
                <CalculatorButton
                        key={key}
                        buttonFunction={numbers[key]}
                        name={key}
                        handleButtonClick={handleNumberClick}
                        number
                />
            ))}
            {Object.keys(operators).map((key) => (
                <CalculatorButton
                        key={key}
                        buttonFunction={operators[key]}
                        name={key}
                        handleButtonClick={handleOperatorClick}
                        setSymbol={setSymbol}
                />
            ))}
            <CalculatorButton
                        name="equals"
                        handleButtonClick={handleEqualsClick}
                        setSymbol={setSymbol}
            />

        </>
    )
}

export default Calculator;