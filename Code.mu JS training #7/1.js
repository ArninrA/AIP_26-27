shout();

function shout() {
	console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!');
};

function cube(a = 1) {
	a = a ** 3;
	console.log(a);
};

let a = prompt('Enter a: ');
cube(a);
cube();

function test0(a) {
	if (a > 0) console.log('+++')
	else if (a == 0) console.log('000')
	else console.log('---');
}

let b = prompt('Enyer b:');
test0(b);

function tripledomainclash(a, b, c) {
	console.log(a + b + c);
}

tripledomainclash(1, 4, 6);

function cubetta(a) {
	return a ** 3;
}

let c = 5;
console.log(c);
c = cubetta(c);
console.log(c);

cube(cubetta(c));

function funci(num) {
	if (num <= 0) {
		return Math.abs(num);
	} else {
		return num ** 2;
	}
}

console.log(funci(10));
console.log(funci(-5));

function funca(arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];

		if (sum >= 10) {
			return i + 1;
		}
	}
}

let res = funca([1, 2, 3, 4, 5]);
console.log(res);

function funcq(num1, num2) {
	let res;

	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return num1 - num2;
	}

	return res;
}

console.log(funcq(3, 4));