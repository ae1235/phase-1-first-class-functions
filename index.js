const receiveAFunction = (callback) => (callback())

const returnsANamedFunction = () => {return receiveFunction}

const returnsAnAnonymousFunction = () => {
    return (function () { })
}