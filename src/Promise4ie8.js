﻿/**
 *	author	: alex
 *	email	: ske@163.com
 *	date	: 二○一六年十一月二十四日
 */
var Promise4ie8 = function() {
	
	var callbacks = [];
	return function(f) {
		var me = this;
		var _selfF = arguments.callee;
	
		f(function(data) {
			var cb = callbacks.shift();	// 取出并执行
			cb && cb.call(me, data);
		}, function(data) {
			var cb = callbacks.shift();	// 取出但不执行
			console.error('error');
		});
		return {
			then: function(callback) {
				callbacks.push(callback);
				return new _selfF(function() {});
			}
		};
	};
}();
