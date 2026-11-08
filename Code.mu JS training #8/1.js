function func1() {
	console.log(num);
	num++; // меняем глобальную переменную
}

function func2() {
	console.log(num);
}

let num = 1;

func1(); // выведет 1
func2(); // выведет 2

function func() {
	console.log(num);
}

num = 1;
func();

num = 2;
func();

function funcq() {
	let num1 = 5;
	return num1;
}

//console.log(num1);


let numqq = 1; // глобальная переменная

function funcqq() {
	let numqq = 2; // локальная переменная
	console.log(numqq);
}
funcqq(); // вызываем функцию, выведет 2

console.log(numqq); // выведет 1 - глобальная переменная не поменялась

let numq = 1;

function funcqqq() {
	numq = 2; // забыли написать let - меняем внешнюю переменную
	console.log(numq);
}
funcqqq(); // вызываем функцию, выведет 2

console.log(numq); // выведет 2 - переменная поменялась

function funcw(arr) {
	arr[0] = '!';
}

let arr = [1, 2, 3];
funcw(arr);
console.log(arr);

function funcww(arr) {
	arr.slice(1, 1);
}

let arrr = [1, 2, 3];
funcww(arrr);
console.log(arrr);

console.log(funcqqq);

function funcs() {
	console.log('!');
}
funcs(); // выведет '!'

funcs = 'string'; // затрем переменную func
console.log(funcs); // выведет 'string'


function funcz() {
	console.log('!');
}

let testz = funcz; // теперь test такая же функция, как и func

// Проверим:
testz(); //выведет '!'
funcz(); //выведет '!'
console.log(testz);

let funczz = function () {
	console.log('!');
};

funczz(); // выведет '!'