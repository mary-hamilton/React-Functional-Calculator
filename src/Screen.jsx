const Screen = ({ symbol, input, result }) => {
    console.log(result)
    return (
        <>
            {symbol}
            {result ? result : input}
        </>
    )
}

export default Screen;