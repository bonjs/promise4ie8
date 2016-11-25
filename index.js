
function f1() {
	var p = new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve('异步返回数据1');
		}, 1000);
	});
	return p;
}

function f2() {
	var p = new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve('异步返回数据2');
		}, 1000);
	});
	return p;
}

function f3() {
	var p = new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve('异步返回数据3');
		}, 1000);
	});
	return p;
}

f1().then(function(data) {
	console.log(data);
	return f2();
}).then(function(data) {
	console.log(data);
	return f3();
}).then(function(data) {
	console.log(data);
});

