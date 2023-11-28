import './App.css';
import Calculator from "./Calculator";
import {useState} from "react";
import Screen from "./Screen";
import {makeNumber} from "./functionalCalculator";

function App() {

    const [input, setInput] = useState([]);
    const [operator, setOperator] = useState(undefined);
    const [result, setResult] = useState(0);
    const [symbol, setSymbol] = useState(undefined);

    const symbols = {
        plus: "+",
        minus: "-",
        times: "*",
        dividedBy: "/",
        equals: "="
    }
    const currentInput = (+ input.join(""));

    const handleNumberClick = (numberFunction) => {

        //TODO understand better why I needed callback functions here
        //TODO implement "Clear' button (easy)
        //TODO make it so you see the number you are typing in and the operand
        //TODO make something insane happen if you divide by 0
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
        const finalOperand = makeNumber(currentInput);
        setResult(() => finalOperand(operator));
        setInput([]);
        setOperator(undefined);
    }

    return (
        <>
            <Calculator
                handleNumberClick={handleNumberClick}
                handleOperatorClick={handleOperatorClick}
                handleEqualsClick={handleEqualsClick}
                setSymbol={setSymbol}
            />
            <Screen
                input={input}
                result={result}
                symbol={symbols[symbol]}
            />
        </>
    );
}

export default App;
