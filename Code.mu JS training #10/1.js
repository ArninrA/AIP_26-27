
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

function funcah(num1, num2) {
	function square(num) {
		return num * num;
	}

	return square(num1) + square(num2);
}

console.log(funcah(2, 3));

//------------------------------------------------------

function testaha(num) {
	function func() {
		console.log(num);
	}

	func();
};

testaha(1);

//----------------------------------------------------------

function func() {
	return function () {
		return '!';
	};
}

let result = func();
console.log(result);
console.log(result());

//----------------------------------------------------------

function func11() {
	return function () {
		return 1;
	};
}

function func22() {
	return function () {
		return 2;
	};
}

console.log(func11()() + func22()());

//--------------------------------------------------------------

function funcke() {
	return function () {
		return function () {
			return '!';
		};
	};
}

console.log(func()()());

//------------------------------------------------------------

function func(num1) {
	return function (num2) {
		return num1 + num2;
	};
}

console.log(func(1)(2));

//------------------------------------------------------------

