const Screen = ({ symbol, input, result }) => {



    return (
        <>
            {symbol}
            {result ? result : input}
        </>
    )
}

export default Screen;