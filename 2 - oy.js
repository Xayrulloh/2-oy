"use strict"
// 18.12) practice 2
Array.prototype.sum = function() {
    let res = 0
    for (let a = 0; a < this.length; a++) {
        res += this[a]
    }
    return res
}

// 18.12) practice 3
/*Array.prototype.mypush = function(a) {
    this[this.length] = a
    return this
}
console.log([1, 2].mypush(3));*/

// 18.12) practice 4
/*Array.prototype.mypop = function() {
    let res = this[this.length - 1]
    this.length -= 1
    return res
}
console.log([1, 2, 3, 4].pop());
console.log([1, 2, 3, 4].mypop());*/

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

// 18.12) classwork 1
/*let full = (num, str) => new Array(num).fill(str)
console.log(full(3, 'a'));*/

// 18.12) classwork 2
/*let rev = (arr) => arr.reverse()
console.log(rev([1, 2, 3]));*/

// 18.12) classwork 3
/*let check = (arr) => arr.filter((a) => {if (a) return a})
console.log(check([0, 1, 2, 3, null, undefined, false]));*/

// 18.12) classwork 4
/*function toobject(arr) {
    let obj = arr.reduce((acumlator, value) => acumlator[value[0]]  = value[1])
    return obj
}
console.log(toobject([['b', 2], ['a', 4]]));*/

// 18.12) classwork 5
/*let siz = (arr, ...num) => arr.filter((v) => !num.inculdes(v))
console.log(siz([1, 2, 3, 4, 5, 6, 7], 1, 2));*/

// 18.12) classwork 6
/*let unique = (arr) => Array.from(new Set(arr))
console.log(unique([1, 2, 1, 2, 5]));*/

// 18.12) classwork 7
/*let isEqual = (arr1, arr2) => arr1.toString() === arr2.toString()
console.log(isEqual([1, 2, 3], [1, 2, 3]));*/

// 18.12) classwork 8
/*function Flatten(arr) {
    let newarr = []
    arr = arr.toString()
    for (const a of arr) {
        if (a == Number(a)) newarr.push(Number(a))
    }
    return newarr
}
console.log(Flatten([[1, 2], [3, 4]]));*/

// 18.12) practice 1
/*function prosta(arr) {
    let sum = 0
    let x = arr.map(el => sum += el)
    return x
}
console.log(prosta([1, 2, 3, 4, 5]));*/

// 18.12) homework 1
/*function factorChain(arr) {
    for (let a = 1; a < arr.length; a++) {
        if (arr[a] % arr[a - 1] != 0) return false
    }
    return true
}
console.log(factorChain([1, 2, 4, 8, 16, 32]));
console.log(factorChain([1, 1, 1, 1, 1, 1]));
console.log(factorChain([2, 4, 6, 7, 12]));
console.log(factorChain([10, 1]));*/

// 18.12) homework 2
/*function removeDubs(arr) {
    arr = new Set(arr)
    arr = Array.from(arr)
    return arr
}
console.log(removeDubs([1, 0, 1, 0]));
console.log(removeDubs(["The", 'big', 'cat']));
console.log(removeDubs(['John', 'Taylor', 'John']));*/

// 18.12) homework 3
/*function miror(arr) {
    let newarr = arr.slice(0, arr.length - 1).reverse()
    return arr.concat(newarr)
}
console.log(miror([0, 2, 4, 6]));
console.log(miror([1, 2, 3, 4, 5]));
console.log(miror([3, 5, 6, 7, 8]));*/

// 20.12) classwork 1
/*function what(arr) {
    return Array.isArray(arr)
}
console.log(what([1, 2, 3]));*/

// 20.12) classwork 2
/*function what(arr, num) {
    if (!arr) return []
    if (num > 0) return arr.splice(0, num)
    else return arr.splice(arr.length + num)
}
console.log(what([], -3));*/

// 20.12) classwork 3
/*function str(arr) {
    return arr.join('+')
}
console.log(str(['Tom', 'John']));*/

// 20.12) classwork 3
/*function what(str) {
    let newstr = ''
    for (let a = 0; a < str.length; a++) {
        newstr += str[a]
        if (Number(str[a]) % 2 == 0 && Number(str[a + 1]) % 2 == 0) newstr += '-'
    }
    return newstr
}
console.log(what('010101'));*/

// 20.12) classwork 4
/*function what(arr) {
    return arr.sort()
}
console.log(what([5, 7, 8, 4, 2]));*/

// 20.12) classwork 5
/*function bigsort(arr, num) {
    let res = []
    for (let a = 0; a < arr.length; a += num) {
        res.push(...arr.slice(a, a + num).sort((a, b) => a-b))
    }
    return res
}
console.log(bigsort([4, 5, 8, 2, 3, 6, 7, 1, 9], 3));*/

// 20.12) classwork 6
/*function mostRepeated(arr) {
    let count = 0
    let max = 0
    let res = ''
    for (let a = 0; a < arr.length; a++) {
        for (let b = 0; b < arr.length; b++) {
            if (arr[a] == arr[b]) count++
        }
        if (max < count) {
            max = count
            res = arr[a]
        }
        count = 0
    }
    return max
}
console.log(mostRepeated(['a', 1, 2, 3, 'a', 'a']));*/

// 20.12) classwork 7
/*function big(str) {
    str = str.toLowerCase()
    str = str.split(' ')
    let res = ''
    for (let a = 0; a < str.length; a++) {
        res += str[a][0].toUpperCase() + str[a].slice(1)
        res += ' '
    }
    return res.slice(0, -1)
}
console.log(big('This Is hoMe worK'));*/

// 20.12) classwork 8
/*function what(arr) {
    for (let a = 0; a < arr.length; a++) {
        console.log(`row${a}:`);
        for (let b = 0; b < arr[a].length; b++) {
            console.log(arr[a][b]);
        }
    }
}
what([[1, 2, 3], [4, 5, 6]])*/

// 20.12) classwork 9
/*function what(arr) {
    let summ = arr.sum()
    let product = arr.reduce((a, b) => a * b)
    console.log({summ : summ, product : product});
}
what([1, 2, 3])*/

// 20.12) homework 1
/*function open(arr) {
    let res = []
    arr.forEach(rev)
    function rev(element) {
        if (Array.isArray(element)) {
            console.log(element);
            return element.forEach(rev);
         }
         return res.push(element);
    }
    return res
}
console.log(open([ 1, 2, [1, 2], [3, 4], [5, 6], [7, 8, [1, 2, 3, [4, 5]]]]));*/

// 20.12) homework 2
/*function show(arr){
    let answer = {}
    const sum = {};
    let n = 0
    for (const num of arr) {
      sum[num] = sum[num] ? sum[num] + 1 : 1;
    }
    for(let key in sum){
        if(sum[key] > n){
            answer = {}
            answer[key] = sum[key]
            n = sum[key]
        }
    }
    return answer
}
console.log(show([7, 8, 7, 8, 7, 84, 5, 4, 5, 1, 2, 1, 5, 7, 9, 5, 4, 84]));*/

// 20.12) classwork 1
/*let sortby0index = (str) => str.split(' ').sort((a, b) => a[0] > b[0] ? 1 : -1).join(' ').replace(/\d+/g, '')
console.log(sortby0index('3end 1This 2is'));*/

// 20.12) classwork 2
/*function add(arr1, arr2) {
    if (arr1.length > arr2.length) {
        for (let a = 0; a < arr2.length; a++) {
            arr1[a] += arr2[a]
        }
    }
    else {
        for (let a = 0; a < arr1.length; a++) {
            arr2[a] += arr1[a]
        }
    }
    console.log(arr1, arr2);
}
add([1, 2, 3], [1, 2, 3, 4, 5, 6])*/

// 20.12) classwork 3
/*function duplicate(arr) {
    let res = []
    let obj = {}
    for (const num of arr) {
        obj[num] = obj[num] ? obj[num] + 1 : 1;
        if (obj[num] == 2) res.push(num)
    }
    return res
}
console.log(duplicate([1, 2, 1, 2, 3, 5, 7]));*/

// 20.12) classwork 4
/*function sortbyId(arr) {
    return arr.sort((a, b) => a['id'] - b['id'])
}
console.log(sortbyId([{id:12,name:'Adham'}, {id:2, name:'Xayrulloh'}]));*/

// 20.12) classwork 5
// solution 1 bad way to solve 
/*const twoSum = (array, goal) => {
    let mapOfNumbers = {};
    let twoIndexes = [];
  
    for (let i = 0; i < array.length; i++) {
      mapOfNumbers[array[i]] = i;
    }
    console.log(mapOfNumbers)
    for (let i = 0; i < array.length; i++) {
      let target = goal - array[i];
      if (mapOfNumbers[target] && mapOfNumbers[target] !== i) {
        twoIndexes.push(i);
        twoIndexes.push(mapOfNumbers[target] );
        return twoIndexes
      }
    }
  
    return [];
  };*/

  // 20.12) homework 1
  /*function longestCommonPrefix(arr) {
    let str = ''
    let solishtirish2 = arr[0]
    let sum = 0
    let check = true
    for (let a = 0; a < arr[0].length; a++) {
        for (let b = 0; b < arr.length; b++) {
            if (solishtirish2[a] === arr[b][a]) {
                sum++
            }
            if (solishtirish2[a] != arr[b][a]) {
                check = false
            }
        }
        if (check === false) return str
        if (sum == arr.length) str += solishtirish2[a]
        sum = 0
    }
    return str
}
console.log(longestCommonPrefix(["flower","flight", 'flow']));*/

// 22.12) classwork 1
/*function pick(arr) {
    if (arr[0] >= arr[1]) return arr[0]
    for (let a = 1; a < arr.length - 1; a++) {
        if (arr[a] >= arr[a -1] && arr[a] >= arr[a + 1]) return arr[a]
    }
    if (arr[arr.length-1] >= arr[arr.length - 2]) return arr[arr.length - 1]
    return false
}
console.log(pick([5, 5, 5]));*/

// 22.12) classwork 2
/*function bigandsmall(arr, kottasi, kichkinasi) {
    arr = new Set(arr)
    arr = Array.from(arr)
    arr = arr.sort((a, b) => a - b)
    console.log(`${kottasi} kottasi --> ${arr[arr.length - kottasi]} va ${kichkinasi} kichkinasi --> ${arr[kichkinasi]}`);
}
console.log(bigandsmall([7, 10, 4, 3, 2, 15], 3, 5));*/

// 22.12) classwork 3
/*function isEqual(arr, num) {
    let sum = 0
    for (let a = 0; a < arr.length; a++) {
        for (let b = a; b < arr.length; b++) {
            sum += arr[b]
            if (sum === num) {
                return [a, b]
            }
            if (sum > num) break
        }
        sum = 0
    }
}
console.log(isEqual([135, 101, 170, 125, 79, 159, 163, 65, 106, 146, 82, 28, 162, 92, 196, 143, 28, 37, 192, 5, 103, 154, 93, 183, 22, 117, 119, 96, 48, 127, 172, 139, 70, 113, 68, 100, 36, 95, 104, 12, 123, 134], 468));*/

// 22.12) classwork 4
/*function sort(arr) {
    let manfiy = []
    let musbat = []
    for (let a = 0; a < arr.length; a++) {
        if (arr[a] < 0) manfiy.push(arr[a])
        else musbat.push(arr[a])
    }
    return manfiy.concat(musbat)
}
console.log(sort([1, -1, 3, 2, -7, -5, 11, 6]));*/

// 22.12) classwork 5
/*let unique = (arr1, arr2) => {arr1 = arr1.concat(arr2); arr1 = new Set(arr1); return Array.from(arr1).length}
console.log(unique([85, 25, 1, 32, 54, 6], [85, 2]));*/

// 22.12) classwork 6
/*let oclock = (arr, num) => {if (num > arr.length) num %= arr.length; return arr.splice(arr.length - num).concat(arr)}
console.log(oclock([1, 2, 3, 4, 5, 6, 7], 2));*/

// 22.12) classwork 7
// 1 solution
/*function deleted(arr) {
    arr = arr.sort((a, b) => a - b)
    for (let a = 0; a < arr.length; a++) {
        if (arr[a] + 1 != arr[a + 1]) return arr[a] + 1
    }
}*/

// 2 solution
/*function deleted(arr) {
    for (let a = 0; a < arr.length; a++) {
        if (!arr.includes(arr[a] + 1)) return arr[a] + 1
    }
}
console.log(deleted([6, 1, 2, 8, 3, 4, 7, 10, 5]));*/

// 22.12) classwork 8
/*function para(arr, num) {
    let res = []
    for (let a = 0; a < arr.length; a++) {
        for (let b = a + 1; b < arr.length; b++) {
            if (arr[a] + arr[b] === num) res.push([arr[a], arr[b]])
        }
    }
    return res.length
}
console.log(para([1, 1, 1, 1], 2));*/

// 22.12) homework 1 
/*let uniqueSort = (arr) => Array.from(new Set(arr.sort((a, b) => a - b)))
console.log(uniqueSort([1, 2, 4, 3]));
console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]));
console.log(uniqueSort([6, 7, 3, 2, 1]));*/

// 22.12) homework 2
/*let findNaN = (arr) => arr.findIndex(Number.isNaN)
console.log(findNaN([1, 2, NaN]));
console.log(findNaN([NaN, 1, 2, 3, 4]));
console.log(findNaN([0, 1, 2, 3, 4]));*/

// 22.12) homework 3
/*let reverseArr = (arr) => {arr = arr.toString().split('').sort(); let result = []; for (let a = arr.length - 1; a >= 0; a--) {result.push(+arr[a])} return result}
console.log(reverseArr(1485979));
console.log(reverseArr(623478));
console.log(reverseArr(12345));*/

// 23.12) classwork 1 
/*let data = [
    {income:500, expanse : 200},
    {income:400, expanse : 100},
    {income:150, expanse : 145},
    {income:230, expanse : 320}
]
let finance = (arr, str) => arr.reduce((a, b) => {if (str === 'total') {a += b.income - b.expanse; return a}; a += b[str]; return a}, 0)
console.log(finance(data, 'income'));*/

// 23.12) homework 1 
/*Array.prototype.myOwnSort = function() {
    let item = 0
    for (let a = 0; a < this.length; a++) {
        for (let b = 0; b < this.length; b++)
            if (this[a] < this[b]) {
                item = this[a]
                this[a] = this[b]
                this[b] = item 
            }
    }
    return this
}
console.log([9, 8, 7, 4, 5, 6, 3, 10, 2, 1].myOwnSort())*/

// 23.12) homework 2
/*Array.prototype.myOwnFilter = function(callback) {
    const filterArr = []
    for (let a = 0; a < this.length; a++) {
        let res = callback(this[a], a, this)
        if (res) filterArr.push(this[a])
    }
    return filterArr
}
let res = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].myOwnFilter((num) => num >= 5)
console.log(res);*/








