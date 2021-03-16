// 函数的声明
/**
 * 函数是 JavaScript 中的基本组件之一。 
 * 一个函数是 JavaScript 过程 — 一组执行任务或计算值的语句。
 * 要使用一个函数，你必须将其定义在你希望调用它的作用域内。
 * 一个JavaScript 函数用function关键字定义，后面跟着函数名和圆括号。
 */
/**
 * 定义函数
 * 函数声明
 * 一个函数定义（也称为函数声明，或函数语句）由一系列的function关键字组成，依次为：
 * 函数的名称。
 * 函数参数列表，包围在括号中并由逗号分隔。
 * 定义函数的 JavaScript 语句，用大括号{}括起来。
 */
// 定义一个简单的square函数
function square(number) {
    return number * number;
}
// 函数square使用了一个参数，叫作number。
// 这个函数只有一个语句，它说明该函数将函数的参数（即number）自乘后返回。
// 函数的return语句确定了函数的返回值： return number * number;

// 原始参数（比如一个具体的数字）被作为值传递给函数；
// 值被传递给函数，如果被调用函数改变了这个参数的值，这样的改变不会影响到全局或调用函数。



// 函数表达式
/**
 * 函数声明在语法上是一个语句，但函数也可以由函数表达式创建。
 * 这样的函数可以是匿名的；它不必有一个名称。
 */

// 函数square也可这样来定义
const square = function (number) { return number * number; };
var x = square(4); // 16

// 函数表达式也可以提供函数名，并且可以用于在函数内部代指其本身，或者在调试器堆栈跟踪中识别该函数：
const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) };
console.log(factorial(3)); // 6

// 当将函数作为参数传递给另一个函数时，函数表达式很方便。
// map的函数被定义，而后使用一个表达式函数作为其第一个参数进行调用：
function map(f, a) {
    let result = []; // 创建一个数组
    let i; // 声明一个值，用来循环
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}

// 在 JavaScript 中，可以根据条件来定义一个函数。
// 当 num 等于 0 的时候才会定义 myFunc
var myFunc;
if (num == 0) {
    myFunc = function (theObject) {
        theObject.make = "Toyoka"
    }
}



// 调用函数
/**
 * 定义一个函数并不会自动的执行它。
 * 定义了函数仅仅是赋予函数以名称并明确函数被调用时该做些什么。
 * 调用函数才会以给定的参数真正执行这些动作。
 */
// 定义square函数 使用 square(5);调用它。
// 通过提供参数 5 来调用函数。函数执行完它的语句会返回值25。
// 函数一定要处于调用它们的域中，但是函数的声明可以被提升(出现在调用语句之后)
console.log(square(5));
function square(n) { return n * n }

// 函数域是指函数声明时的所在的地方，或者函数在顶层被声明时指整个程序。
/**
 * 只有使用如上的语法形式（即 function funcName(){}）才可以。
 * 而下面的代码是无效的。就是说，函数提升仅适用于函数声明，而不适用于函数表达式。
 */
console.log(square); // square is hoisted with an initial value undefined.
console.log(square(5)); // Uncaught TypeError: square is not a function
const square = function (n) {
    return n * n;
}

// 函数可以被递归，就是说函数可以调用其本身



// 函数作用域
/**
 * 在函数内定义的变量不能在函数之外的任何地方访问，因为变量仅仅在该函数的域的内部有定义。
 * 相对应的，一个函数可以访问定义在其范围内的任何变量和函数。
 * 定义在全局域中的函数可以访问所有定义在全局域中的变量。
 * 在另一个函数中定义的函数也可以访问在其父函数中定义的所有变量和父函数有权访问的任何其他变量。
 */




// 作用域和函数堆栈
// 递归：一个函数可以指向并调用自身。
// 有三种方法： 1.函数名    2.arguments.callee  3. 作用域下的一个指向该函数的变量名
// 函数的定义
var foo = function bar() { }
// bar() arguments.callee() foo() 在这个函数体内，是等价的

// 调用自身的函数我们称之为递归函数。在某种意义上说，递归近似于循环。
// 两者都重复执行相同的代码，并且两者都需要一个终止条件（避免无限循环或者无限递归）。
var x = 0;
while (x < 10) { // "x < 10" 是循环条件
    x++;
}
// 可以被转化成一个递归函数和对其的调用：
function loop(x) {
    if (x >= 10)  // "x >= 10" 是退出条件（等同于 "!(x < 10)"）
        return;
    loop(x + 1); // 递归调用
}
loop(0);

// 有些算法并不能简单的用迭代来实现。
// 例如，获取树结构中所有的节点时，使用递归实现要容易得多：
function walkTree(node) {
    if (node == null)
        return;
    for (var i = 0; i < node.childNodes.length; i++) {
        walkTree(node.childNodes[i]);
    }
}
// 跟loop函数相比，这里每个递归调用都产生了更多的递归。