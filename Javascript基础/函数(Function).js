/**
 * 函数用来封装可复用的功能。如果没有函数，一段特定的操作过程用几次就要重复写几次，而使用函数则只需写下函数名和一些简短的信息。之前已经涉及过一些函数
 * 比如： document.querySelector 和 alert 是浏览器内置的函数，随时可用。
 * 如果代码中有一个类似变量名后加小括号()的东西，很可能就是一个函数。函数通常包括参数，参数中保存着一些必要的数据。它们位于括号内部，多个参数之间用逗号分开。
 * 比如， alert() 函数在浏览器窗口内弹出一个警告框，还应为其提供一个字符串参数，以告诉它警告框里要显示的内容。
 */
let myVariable = document.querySelector('h1');
alert('hello!');

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
multiply(4, 7); // 28
multiply(20, 20); // 400
multiply(0.5, 3); // 1.5
/**
 * return 语句告诉浏览器当前函数返回result变量
 * 因为函数内定义的变量只能在函数内使用。这叫做变量的作用域。
 */