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
/*let matchHouse = (num) => {console.log(num == 1 ? num * 6 : (num * 6) - (num - 1))}
matchHouse(4)*/

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

// homework 23
/*let sumOfCubes = (arr) => {let sum = 0; arr.forEach(element => {sum += (element ** 3)}); console.log(sum);}
sumOfCubes([1, 5, 9])*/

// homework 23
/*let equalSlices = (num1, num2, num3) => num1 >= (num2 * num3) ? true : false
console.log(equalSlices(11, 5, 3));*/

// homework 23
/*function digitalClock(num) {
    let oclock = 0
    let min = 0
    while (num >= 3600) {
        num -= 3600
        oclock++
    }
    while (num >= 60) {
        num -= 60
        min++
    }
    let sec = num
    if (oclock < 10) oclock = '0' + oclock
    if (min < 10) min = '0' + min
    if (sec < 10) sec = '0' + sec
    if (oclock >= 24) {
        if (oclock === 24) console.log(`00:${min}:${sec}`);
        if (oclock > 24) {
            oclock -= 24
            if (oclock < 10) console.log(`0${oclock}:${min}:${sec}`);
        }
    }
    else console.log(`${oclock}:${min}:${sec}`);
}
digitalClock(5025)
digitalClock(61201)
digitalClock(87000)*/

// homework 23
/*function numLayers(num) {
    let mm = 0.0005
    while (num > 0) {
        num--
        mm = mm * 2
        console.log(mm);
    }
    return mm
}
console.log(numLayers(21));*/

// homework 23
/*let posCom = (num) => num * 2
console.log(posCom(3));*/

// homework 24


// repetition 1
/*let sum = (num) => {
    let summ = 0
    while (num > 0) {
        summ += num % 10
        num = Math.floor(num / 10)
    }
    console.log(summ);
}
sum(12345)*/

// repetition 2
/*function func(nums, sum=''+nums, res=0, count=0) {
    if (sum.length == count) return res
    res += +sum[count]
    return func(nums, sum, res, ++count)
}
console.log(func(12345));*/

// repetition 3
/*let foiz = (num1, num2) => num1 - ((((num1 / num2) | 0) * num2))
console.log(foiz(5, 2));*/

// repetition 4 
/*function kopaytirish(num1, num2, sum=0) {
    if (num2 == 0) return sum
    return kopaytirish(num1, num2-1, sum+=num1)
}
console.log(kopaytirish(5, 5));*/

// repetition 5
/*function factorial (num, sum = 1) {
    if (num == 1) return sum
    sum = sum * num
    return factorial(--num, sum)
}
console.log(factorial(5));*/

// ants little project
// function output(str) {
//     let item = ''
//     for (let a = 0; a < str.length; a++) {
//         item = str.replace(a, '.')
//         console.log(item);
//     }
// }
// output('>...')

// 13.12) exercise1
/*function sortby0(arr) {
    for (let a = arr.length; a >= 0; a--) {
        if (arr[a] == 0) {
            arr.splice(a, 1)
            arr.push(0)
        }
    }
    return arr
}
console.log(sortby0([0, 1, 6, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 98]));*/

