import {numbers, operators} from "./functionalCalculator";
import CalculatorButton from "./CalculatorButton";

const Calculator = ({ handleNumberClick, handleOperatorClick, handleEqualsClick }) => {

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
                        handleClick={handleNumberClick}
                />
            ))}
            {Object.keys(operators).map((key) => (
                <CalculatorButton
                        key={key}
                        buttonFunction={operators[key]}
                        name={key}
                        handleClick={handleOperatorClick}
                />
            ))}
            <CalculatorButton
                        name="Equals"
                        handleClick={handleEqualsClick}/>
        </>
    )
}

export default Calculator;