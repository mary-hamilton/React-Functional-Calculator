const Screen = ({ symbol, input, result }) => {



    return (
        <>
            {symbol}
            {result !== undefined ? result : input}
        </>
    )
}

export default Screen;