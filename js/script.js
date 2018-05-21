"use strict"
// Боковое меню по кнопке
var toggle = document.querySelector('.nav-toggle');
var toggled = document.querySelector('.right-sidebar');
toggle.addEventListener('click', function(e) {
	this.classList.toggle('opened');
	toggled.classList.toggle('openedBar');
});
var inputBtn = document.getElementsByClassName('right-sidebar-search__field');

// Кнопка наверх

var toTop = document.getElementById('btnToTop');
function scrollToTop() {
	window.pageYOffset > 2000 ? window.scrollBy(0, -100) : window.pageYOffset > 1000 ? window.scrollBy(0, -60) : window.scrollBy(0, -40);
	if (window.pageYOffset) setTimeout(scrollToTop, 10);
}
toTop.addEventListener('click', scrollToTop);
var content = document.querySelector('.content');
content.addEventListener('click', function () {
	if (toggled.classList.contains('openedBar')) {
		toggled.classList.toggle('openedBar');
	}
});

// Боковое меню свайпом

var xStart, yStart;
var body = document.querySelector('body');
body.addEventListener('touchstart', function (e) {
	xStart = e.changedTouches[0].screenX;
	yStart = e.changedTouches[0].screenY;
});
body.addEventListener('touchend', function (e) {
	var touches = e.changedTouches;
	var xEnd = touches[0].screenX;
	var yEnd = touches[0].screenY;

	if (xStart - xEnd > 50 && Math.abs(yStart - yEnd) < 40) {
		toggled.classList.add('openedBar');
		if (window.pageYOffset > 100) toggled.style.top = window.pageYOffset + "px";
		else toggled.style.top = "80px";
	}
	if (xStart - xEnd < -50 && Math.abs(yStart - yEnd) < 40) toggled.classList.remove('openedBar');
});

// Календарь

var calendar = document.getElementById('date');
var today = new Date();
var months = ['ЯНВ', 'ФЕВ', 'МАР', 'АПР', 'МАЙ', 'ИЮН', 'ИЮЛ', 'АВГ', 'СЕН', 'ОКТ', 'НОЯ', 'ДЕК'];
calendar.innerHTML = `${months[today.getMonth()]}<br><b>${today.getDate()}</b>`;
