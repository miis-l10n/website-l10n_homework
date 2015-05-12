
var body = document.querySelector("body")
var button = document.querySelector(".change_button")

button.addEventListener("click", changeBackground);

function changeBackground () {
body.style.backgroundImage = "url(images/sea.jpg)";
alert("欢迎来到我的旅行日志网站！您可以刷新来重新设置背景：）");
}
