
function f1() {
	var p = new Promise4ie8(function(resolve, reject) {
		setTimeout(function() {
			resolve('�첽��������1');
		}, 1000);
	});
	return p;
}
function f2() {
	var p = new Promise4ie8(function(resolve, reject) {
		setTimeout(function() {
			resolve('�첽��������2');
		}, 1000);
	});
	return p;
}
function f3() {
	var p = new Promise4ie8(function(resolve, reject) {
		setTimeout(function() {
			resolve('�첽��������3');
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
});
