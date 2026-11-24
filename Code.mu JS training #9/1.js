
function funcqqq() {
	let numq = 2;
	console.log(numq);
}

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

//-------------------------------------------------------------------------------

let funch = function () {
	console.log('!');
};

funch(); //expression

//--------------------------------------------------------------------------------

console.log(function () { return 3; });

//--------------------------------------------------------------------------------

let testhh = function funchh() {
	console.log('!');
};

testhh();

//---------------------------------------------------------------------------------

/*let testhhh = function funchhh() {
	console.log('eee');
	funchhh();
	testhhh();
	
};

testhhh(); */

//-------------------------------------------------------------------------------------

console.log(function funche() {
	console.log('!');
} + 1);

//--------------------------------------------------------------------------------------

let arr = [
	function () { console.log('1') },
	function () { console.log('2') },
	function () { console.log('3') },
];

console.log(arr[0]);
arr[0]();
for (let func of arr) {
	func();
};

//----------------------------------------------------------------------------------------

let obj = {
	func1: function () { console.log(1) },
	func2: function () { console.log(2) },
	func3: function () { console.log(3) },
};

obj.func1();

//-----------------------------------------------------------------------------------------------

let math = {
	square: function (num) { return num * num },
	cube: function (num) { return num * num * num },
};

console.log(math.square(2));
console.log(math.cube(2));

//------------------------------------------------------------------------

testeh(
	function () { return 1; },
	function () { return 2; }
);

function testeh(func1, func2) {
	console.log(func1() + func2());
}

//-------------------------------------------------------------------------

let get1 = function () {
	return 1;
}
let get2 = function () {
	return 2;
}

testehe(get1, get2); // выведет 3

function testehe(func1, func2) {
	console.log(func1() + func2());
}

//---------------------------------------------------------

testeheh(
	function (num) {
		return num * num;
	}
);

function testeheh(func1) {
	console.log(func1(3));
}

//--------------------------------------------------------

function testoh(num, func) {
	console.log(func(num));
}

testoh(2, function (num) {
	return num * num; 
});

testoh(2, function (num) {
	return num * num * num;
});

//--------------------------------------------------

function testoho(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = func(arr[i]);
	}

	return arr;
}

let result = testoho(
	[1, 2, 3],
	function (num) { return num * num; }
);

console.log(result);

//-----------------------------------------------------

