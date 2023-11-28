import Button from '@mui/material/Button';

const CalculatorButton = ({ buttonFunction, name, handleButtonClick, setSymbol, number, clear }) => {

    const handleClick = () => {
        if (!number && !clear) {
            setSymbol(name)
        }
        handleButtonClick(buttonFunction);
    }

    return (
        <>
            <Button onClick={handleClick}>{name}</Button>
        </>
    )
}

export default CalculatorButton;