const number = (value) => {
    return (operatorFunc) => {
        if (operatorFunc) {
            return operatorFunc(value);
        }
        return value;
    };
}

const zero = number(0);

const one = number(1);

const two = number(2);

const three = number(3);

const four = number(4);

const five = number(5);

const six = number(6);

const seven = number(7);

const eight = number(8);

const nine = number(9);

const plus = (number) => {
    return (otherNumber) => {
        return otherNumber + number;
    }
}

const minus = (number) => {
    return (otherNumber) => {
        return otherNumber - number;
    }
}

const times = (number) => {
    return (otherNumber) => {
        return otherNumber * number;
    }
}
const dividedBy = (number) => {
    return (otherNumber) => {
        return Math.floor(otherNumber / number);
    }
}

export const numbers = {zero, one, two, three, four, five, six, seven, eight, nine};
export const operators = {plus, minus, times, dividedBy};