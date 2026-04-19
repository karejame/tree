/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				// 检查是否到达字符串末尾
				if (progress >= str.length) {
					clearInterval(timer);
					return;
				}
				
				var current = str.substr(progress, 1);
				
				// 如果遇到标签开始
				if (current == '<') {
					// 找到标签的结束位置
					var endPos = str.indexOf('>', progress);
					if (endPos != -1) {
						// 显示到标签结束位置
						$ele.html(str.substring(0, endPos + 1) + (progress & 1 ? '_' : ''));
						progress = endPos + 1;
					} else {
						// 如果没有找到标签结束，就只显示当前字符
						$ele.html(str.substring(0, progress + 1) + (progress & 1 ? '_' : ''));
						progress++;
					}
				} else {
					// 显示当前字符
					$ele.html(str.substring(0, progress + 1) + (progress & 1 ? '_' : ''));
					progress++;
				}
			}, 120);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒"; 
	$("#clock").html(result);
}
