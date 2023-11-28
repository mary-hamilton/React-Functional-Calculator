export const calculate = (value) => {
    return (operatorFunc) => {
            return operatorFunc(value);
    };
}
const returnNumber = (value) => {
    return () => value;
}

const numNameArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

export const functionalNumNames = {}
numNameArray.forEach((numName, index) => {
        functionalNumNames[numName] = returnNumber(index);
})

const plus = (number) => {
    return (otherNumber) => {
        return number + otherNumber;
    }
}

const minus = (number) => {
    return (otherNumber) => {
        return number - otherNumber;
    }
}

const times = (number) => {
    return (otherNumber) => {
        return number * otherNumber;
    }
}
const dividedBy = (number) => {
    return (otherNumber) => {
        return number / otherNumber;
    }
}
export const operators = {plus, minus, times, dividedBy};