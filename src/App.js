import './App.css';
import Calculator from "./Calculator";
import {useState} from "react";
import Result from "./Result";

function App() {

    const [secondOperand, setSecondOperand] = useState();
    const [operator, setOperator] = useState();
    const [result, setResult] = useState(0);

    const handleNumberClick = (numberFunction) => {

        if (!secondOperand) {
            setSecondOperand(() => numberFunction());
            setResult(() => 0);
        } else {
            setResult(() => numberFunction(operator));
            setSecondOperand(undefined);
        }
    }

    const handleOperatorClick = (operatorFunction) => {
        if(!secondOperand) {
            return;
        }
        setOperator(() => operatorFunction(secondOperand));
    }

    return (
        <>
            <Calculator
                handleNumberClick={handleNumberClick}
                handleOperatorClick={handleOperatorClick}
            />
            <Result result={result}/>
        </>
    );
}

export default App;
