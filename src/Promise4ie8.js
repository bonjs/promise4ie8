/**
 * author	: alex
 * email	: ske@163.com
 * date		: 二○一六年十一月二十四日
 */ 
// 使用方法和Promise基本一样，对原生Promise是否支持自动判断
var Promise = function() {
	if(typeof Promise == 'function') {
		//return Promise;
	}
	var callbacks 		= [];	// 存放then
	var catchCallbacks 	= [];	// 存放catch
	
	var F = function(fn) {
		var me = this;
		fn(function(data) {
			try {
				var cb = callbacks.shift();
				cb && cb.call(me, data);
			} catch(e) {
				var ccb = catchCallbacks.shift();
				ccb ? ccb.call(me, e) : function() {throw Error(e)}();
			}
		}, callbacks.shift);
	};
	
	F.prototype = {
		constructor: F,
		then: function(callback, catchCallback) {
			callback 		&& callbacks.push(callback);
			catchCallback 	&& catchCallbacks.push(catchCallback);
			return new F(function() {});
		},
		catch: function(catchCallback) {
			catchCallbacks.push(catchCallback);
			return new F(function() {});
		}
	};
	
	F.resolve = function() {
		alert('待完善');
	}

	F.reject = function() {
		alert('待完善');
	}
	F.all = function() {
		alert('待完善');
	}
		
	return F;
}();


