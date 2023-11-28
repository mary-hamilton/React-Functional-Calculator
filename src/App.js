import './App.css';
import Calculator from "./Calculator";
import {useState} from "react";
import Screen from "./Screen";
import {calculate} from "./functionalCalculator";

function App() {

    const [input, setInput] = useState([]);
    const [operator, setOperator] = useState(undefined);
    const [result, setResult] = useState(0);
    const [symbol, setSymbol] = useState(undefined);

    const operatorsAsSymbols = {
        plus: "+",
        minus: "-",
        times: "*",
        dividedBy: "/",
        equals: "="
    }

    const numbersAsDigits = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }

    const currentInput = (+ input.join(""));

    const handleNumberClick = (numberFunction) => {

        if (!operator) {
            setSymbol(undefined);
        }
        setResult(undefined);
        setInput([...input, numberFunction()]);
    }

    const handleOperatorClick = (operatorFunction) => {

        if(!operator) {
            setOperator(() => operatorFunction(currentInput));
            setInput(() => []);
        }
    }

    const handleEqualsClick = () => {
        if(operator) {
            setResult(() => calculate(currentInput)(operator));
            setInput(() => []);
            setOperator(() => undefined);
        } else {
            setResult(() => input)
        }
    }

    const handleClearClick = () => {
        setInput([]);
        setResult(0);
        setOperator(undefined);
        setSymbol(undefined);
    }

    return (
        <>
            <Calculator
                handleNumberClick={handleNumberClick}
                handleOperatorClick={handleOperatorClick}
                handleEqualsClick={handleEqualsClick}
                handleClearClick={handleClearClick}
                numbersAsDigits={numbersAsDigits}
                operatorsAsSymbols={operatorsAsSymbols}
                setSymbol={setSymbol}
            />
            <Screen
                input={input}
                result={result}
                symbol={symbol}
            />
        </>
    );
}

export default App;
