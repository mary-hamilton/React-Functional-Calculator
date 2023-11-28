import './App.css';
import Calculator from "./Calculator";
import {useState} from "react";
import Screen from "./Screen";
import {makeNumber} from "./functionalCalculator";

function App() {

    const [input, setInput] = useState([]);
    const [operator, setOperator] = useState(undefined);
    const [result, setResult] = useState(undefined);
    const [symbol, setSymbol] = useState(undefined);

    console.log(input)
    console.log(result)

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
        setInput(() =>[]);
        setOperator(() => undefined);
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
