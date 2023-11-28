export const makeNumber = (value) => {
    return (operatorFunc) => {
        if (operatorFunc) {
            return operatorFunc(value);
        }
        return value;
    };
}

const zero = makeNumber(0);

const one = makeNumber(1);

const two = makeNumber(2);

const three = makeNumber(3);

const four = makeNumber(4);

const five = makeNumber(5);

const six = makeNumber(6);

const seven = makeNumber(7);

const eight = makeNumber(8);

const nine = makeNumber(9);

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
export const numbers = {zero, one, two, three, four, five, six, seven, eight, nine};
export const operators = {plus, minus, times, dividedBy};