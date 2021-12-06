// homework 22
/*function charroomStatus(arr) {
    if (!arr.length) return 'no one online'
    if (arr.length === 1) return arr[0]
    if (arr.length === 2) return `${arr[0]} and ${arr[1]} online`
    if (arr.length > 2) return `${arr[0]} and ${arr[1]} ${arr.length - 2} more online`
}
console.log(charroomStatus([]));
console.log(charroomStatus(['parie_to']));
console.log(charroomStatus(['nima', 'gap']));
console.log(charroomStatus(['what', 'are', 'you', 'doing']));*/

// homework 22
/*let matchHouse = (num) => {
    if (num == 1) return num * 6
    else return (num * 6) - (num - 1)
}
console.log(matchHouse(4));*/

// homework 22
/*function calculator(num1, amal, num2) {
    switch (amal) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            'you idiot'
            break;
    }
}
console.log(calculator(2, '/', 2));*/

// homework 22
/*function numbersum(arr) {
    let sum = 0
    arr.forEach(element => {
        if (element === Number(element)) sum += element
    })
    console.log(sum);
}
numbersum([1, 2, 3, '4', '5', '6'])*/

// homework 22
/*function solve(str) {
    let arr = str.split(' ')
    let amal = ''
    let num1 = Number(arr.splice(-1, 1))
    let num2 = 0
    for (const element of arr) {
        if (element === '+' || element === '-' || element === '/' || element === '*') amal = element
        if (element == Number(element)) num2 = Number(element)
    }
    switch (amal) {
        case '+':
            return num1 - num2
        case '-':
            return num1 + num2
        case '*':
            return num1 / num2
        case '/':
            return num1 * num2
        default:
            'you idiot'
            break;
    }
}
console.log(solve('43 + x = 50'));*/

// homework 22
/*function Distance(distance1, distance2) {
    let x = distance1.x1
    let y = distance1.y1
    x = x - distance2.x2
    y = y - distance2.y2
    let result = Math.sqrt(x * x + y * y)
    return result
}
console.log(Distance({ x1: 0, y1: 0 }, { x2: 1, y2: 1 }));*/


















