import Button from '@mui/material/Button';

const CalculatorButton = ({ buttonFunction, name, handleButtonClick, setSymbol, number }) => {

    const handleClick = () => {
        if (!number) {
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