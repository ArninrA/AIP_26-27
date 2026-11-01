let arr = [
	['a', 'b', 'c'],
	['d', 'e', 'f'],
	['g', 'h', 'i'],
	['j', 'k', 'l'],
];

console.log(arr[3][2] + arr[1][1] + arr[2][0]);

/*----------------------------- */

let arr1 = [
	[
		['a', 'b'],
		['c', 'd'],
	],
	[
		['e', 'f'],
		['g', 'h'],
	],
	[
		['i', 'j'],
		['k', 'l'],
	],
];

console.log(arr1[0][0][0]);
console.log(arr1[2][1][0]);

/*---------------------------------- */

let arr2 = [
	[
		'a', 'b', [1, 2, 3], [4, 5],
	],
	[
		'd', ['e', 'f'],
	],
];

console.log(arr2[0][1] + arr2[1][1][1] + arr2[0][2][2])

/*------------------------------------------*/

let arr3 = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

for (let subArr of arr3) {
	let sums = null;
	for (let elem of subArr) {
		sums += elem;
	}
	console.log(sums);
}

/*------------------------------------------- */

let arr4 = [];

for (let i = 0; i < 4; i++) {
	arr4[i] = [];

	for (let j = 0; j < 2; j++) {
		arr4[i].push(j + 1);
	}
}

console.log(arr4);

let arr5 = [];
let k = 65;
for (let i = 0; i < 2; i++) {
	arr5[i] = [];

	for (let j = 0; j < 3; j++) {
		arr5[i].push(k);
		k++;
	}
}

console.log(arr5);

/*---------------------------------------------- */

let obj = {
	a: {
		key1: 'a1',
		key2: 'a2',
		key3: 'a3',
	},
	b: {
		key1: 'b1',
		key2: 'b2',
		key3: 'b3',
	},
	c: {
		key1: 'c1',
		key2: 'c2',
		key3: 'c3',
	},
}

console.log(obj['a'].key1);
console.log(obj.a['key1']);

/*----------------------------------------------- */

let students = {
	'group1': ['name11', 'name12', 'name13'],
	'group2': ['name21', 'name22', 'name23'],
	'group3': ['name31', 'name32', 'name33'],
};

console.log(students.group1[2]);

for (let group in students) {
	for (let name of students[group]) {
		console.log(name);
	}
}
/*-------------------------------------------------- */

let users = [
	{
		name: 'name1',
		surn: 'surn1',
	},
	{
		name: 'name2',
		surn: 'surn2',
	},
	{
		name: 'name3',
		surn: 'surn3',
	},
];

for (let user of users) {
	console.log(user.name + ' ' + user.surn);
}

users.push({
	name: 'name4',
	surn: 'surn4',
});

for (let user of users) {
	console.log(user.name + ' ' + user.surn);
}

/*--------------------------------------------------- */

