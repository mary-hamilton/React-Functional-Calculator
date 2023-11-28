import Button from '@mui/material/Button';

const CalculatorButton = ({ buttonFunction, name, handleClick}) => {
    return (
        <>
            <Button onClick={() => handleClick(buttonFunction)}>{name}</Button>
        </>
    )
}

export default CalculatorButton;