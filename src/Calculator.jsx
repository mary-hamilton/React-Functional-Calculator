import {numbers, operators} from "./functionalCalculator";
import CalculatorButton from "./CalculatorButton";

const Calculator = ({ handleNumberClick, handleOperatorClick }) => {
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
        </>
    )
}

export default Calculator;