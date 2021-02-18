/**
 * 事件能为网页添加真实的交互能力。它可以捕捉浏览器操作并运行一些代码做为响应。最简单的事件是 点击事件，鼠标的点击操作会触发该事件。
 */

/**
 * 将事件与元素绑定有许多方法。在这里选用了 <html> 元素，把一个匿名函数（就是没有命名的函数，这里的匿名函数包含单击鼠标时要运行的代码）赋值给了 html 的 onclick 属性。
 */

// 点击页面任何位置，都会显示提示框
document.querySelector('html').onclick = function () {
    alert('别戳我，我怕疼。');
}

document.querySelector('html').onclick = function () { };
// 等价于
let myHTML = document.querySelector('html');
myHTML.onclick = function () { };