console.log(Math.pow(3, 4));
console.log(Math.pow(3, Math.sqrt(16)));
let arr = [4, 2, 5, 19, 13, 0, 10];
for (let num of arr) {
    console.log(Math.pow(num, 2))
};

/*----------------------------------------- */

console.log((Math.sqrt(379)).toFixed(0));
console.log((Math.sqrt(379)).toFixed(1));
console.log((Math.sqrt(379)).toFixed(2));

console.log(Math.round(Math.sqrt(587)));
console.log(Math.ceil(Math.sqrt(587)));
console.log(Math.floor(Math.sqrt(587)));
console.log((Math.sqrt(587)).toPrecision(7));

/*-------------------------------------------- */

let arr1 = [4, -2, 5, 19, -130, 0, 10];
let max = Math.max(...arr1);
let min = Math.min(...arr1);

console.log(max);
console.log(min);

/*-----------------------------------------------*/

console.log(Math.random() * (100 - 1) + 1);

/*------------------------------------------------*/

let a = 2;
let b = 8;

console.log(Math.abs(b - a));

/*----------------------------------------------------*/

let str = 'BeBeBe nynynyny i love you';
console.log(str.toLowerCase());
console.log(str.toUpperCase());

/*---------------------------------------------------- */

console.log(str.substr(0, 7));
console.log(str.slice(7, 18));
console.log(str.substring(18));

/*-----------------------------------------------------*/

if (str.includes('love')) console.log("str.includes('love')");
if (str.startsWith('BeBe')) console.log("str.startsWith('BeBe')");
if (str.endsWith('you')) console.log("str.endsWith('you')");
console.log(str.indexOf('Be'));
console.log(str.lastIndexOf('Be'));

let Str = str.replace('love', 'Love');
console.log(Str);
let e = 0;
let arr2 = Str.split(' ');
for (let ee of arr2) {
    console.log(ee);
};

let ret = arr2.join('+');
console.log(ret);

/*----------------------------------------------------- */

ret = arr2.shift();
console.log(ret);
console.log(arr2);

ret = arr2.pop();
console.log(ret);
console.log(arr2);

ret = arr2.push('you');
console.log(ret);
console.log(arr2);

ret = arr2.unshift('BeBeBe');
console.log(ret);
console.log(arr2);

/*---------------------------------------------------- */

ret = arr2.slice(2, 5);
console.log(ret);

ret = arr2.splice(2, 1, 'I', 'absolutely')
console.log(arr2);

/*-----------------------------------------------------*/

obj = { 'a': 1, 'b': 2, 'c': 3 };
console.log(Object.keys(obj));