const receivesAFunction = (callback) => (callback())

const returnsANamedFunction = () => {return receivesAFunction}

const returnsAnAnonymousFunction = () => {
    return (function () { })
}