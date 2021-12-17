"use strict"
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

// 13.12) exercise 1
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


// 14.12) exercise 1 
/*let arr = [
    {name: 'ahror', age: 22, gender: 1},
    {name: 'ahror', age: 22, gender: 1, devs: 'javascript'},
    {name: 'alisher', age: 17, gender: 1},
    {name: 'bobir', age: 32, gender: 1},
    {name: 'salim', age: 22, gender: 1},
    {name: 'aliy', age: 21, gender: 1},
]
function filter(arr, object) {
    let result = []
    for (let user of arr) {
        let count = 0
        for (let key in object) {
            if (user[key] == object[key]) count++
        }
        if (Object.keys(object).length == count) result.push(user)
    }
    return result
}
console.log(filter(arr, {name: 'ahror', age: 22}));*/

// 14.12) exercise 2
/*function reverse(arr) {
    let result = []
    let str = ''
    for (const a of arr) {
        for (let b = a.length - 1; b >= 0; b--) {
            str += a[b]
        }
        result.push(str)
        str = ''
    }
    console.log(result);
} 
reverse(['olma', 'gilos', 'shaftoli'])*/

// 14.12) exercise 3
/*function zero(num) {
    let result = []
    let count = 1
    if (num % 2 == 0) {
        while (result.length < num) {
            result.push(count, -count)
            count++
        }
    }
    else {
        while (result.length < num - 1) {
            result.push(count, -count)
            count++
        }
        result.push(0)
    }
    return result
}
console.log(zero(5));*/

// 15.12) class lesson
// laptop qancha tezlida ishlashi 
/*console.time();
for (let a = 0; a < 100000; a++) {
    let square = a ** 2
}
console.timeEnd();*/

// oxirgi hisoblolidigan soni
/*console.log(Number.MIN_SAFE_INTEGER);*/

// 10 diwi orniga . qoysa boladi
/*let x = .3 - .2
let y = .2 - .1
console.log(x === y);*/

// string method repetition
/*let s = "what is your name"
console.log(s.startsWith("wh"));
console.log(s.endsWith("me"));*/

// 15.12) exercise 1
/*function count(str) {
    let obj = {}
    for (const a of str) {
        let key = a
        if (!obj[key]) {
            obj[key] = 1
        }else obj[key] += 1
    }
    return obj
}
console.log(count('hello'));*/

// 15.12) homework 1
/*var containsDuplicate = function(nums) {
    const map = {}
    for(const num of nums) {
        // If we have seen this num before return true
        if(map[num]) return true
        map[num] = true
    }
    return false
};*/

// 15.12) homework 2
/*function findDuplicates(nums) {
    let obj = {}
    let arr = []
    for (const a of nums) {
        let key = a
        if (!obj[key]) obj[key] = a
        else if (!arr.includes(a)) arr.push(a)
    }
    return arr
}
console.log(findDuplicates([4,3,2,7,8,2,3,1,2,3]));
console.log(findDuplicates([1,1,2]));
console.log(findDuplicates([4,5,4,1,2,6]));*/

// 16.12) Classwork 1
/*let index = (arr, num) => {for (let a = 0; a < arr.length; a++) {if (arr[a] === num) console.log(a)}}
index([1, 2, 3, 4, 5, 6, 7], 5)*/

// 16.12) homework 1
/*function digitalClipher(message, key) {
    let res = []
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    key = key.toString()
    for (let a = 0, b = 0; a < message.length; a++, b++) {
        if(b > key.length - 1) b = 0
        res.push(alphabet.indexOf(message[a]) + 1 + (+key[b]))
    }
    return res
}
console.log(digitalClipher('scout', 19391));
console.log(digitalClipher('masterpiece', 1939));
console.log(digitalClipher('edabit', 100));*/

// 16.12) homework 2
/*function sort(arr) {
    let item = 0
    for (let a = 0; a < arr.length; a++) {
        for (let b = 0; b < arr.length; b++) {
            if (arr[a] < arr[b]) {
                item = arr[a]
                arr[a] = arr[b]
                arr[b] = item
            }
        }
    }
    return arr
}
console.log(sort([2, -5, 1, 4, 7, 8]));
console.log(sort([23, 15, 34, 17, -28]));
console.log(sort([38, 57, 45, 18, 47, 39]));*/

// 16.12) homework 3
/*function convert(str) {
    if (str.length < 4) return 'Are you idiot or stupid choose one of this C or F'
    let half = str.slice(0, 2)
    if (str[3] == "C") return `${half * 9/5 + 32}*F`
    if (str[3] == 'F') return `${Math.round((half - 32) * 5/9)}*C`
}
console.log(convert('35*C'));
console.log(convert('19*F'));
console.log(convert('35'));*/






