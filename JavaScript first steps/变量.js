/**
 * 一个变量，就是一个用于存放数值的容器。这个数值可能是一个用于累加计算的数字，或者是一个句子中的字符串。
 * 变量的独特之处在于它存放的数值是可以改变的。
 * 变量能够存储任何的东西,不只是字符串和数字。
 * 变量可以存储更复杂的数据，甚至是函数。
 * 变量不是数值本身，它们仅仅是一个用于存储数值的容器。
 */

// 声明变量：在 var 或 let 关键字之后加上这个变量的名字
/**
 * 提示: 在JavaScript中，所有代码指令都会以分号结尾 (;) — 如果忘记加分号，你的单行代码可能执行正常，但是在多行代码在一起的时候就可能出错。
 * 所以，最好是养成主动以分号作为代码结尾的习惯。
 */
let myName;
let myAge;
// 通过使用变量的方式来验证这个变量的数值是否在执行环境中已经存在。
myName; // undefined
myAge; // undefined
//以上这两个变量并没有数值，他们是空的容器。输入变量名并回车后，得到一个undefined的返回值。

//如果他们并不存在的话，那就会得到一个报错信息。
scoobyDoo; // Uncaught ReferenceError: scoobyDoo is not defined

/**
 * “一个变量存在，但是没有数值”和“一个变量并不存在” — 他们完全是两回事 — 在前面你看到的盒子的类比中，不存在意味着没有可以存放变量的“盒子”。
 * 没有定义的值意味着有一个“盒子”，但是它里面没有任何值。
 */





// 初始化变量：定义一个变量，就能够初始化它. 方法如下，在变量名之后跟上一个“=”，然后是数值
myName = 'Chris';
myAge = 37;
myName; // "Chris"
myAge; // 37
// 也可以在声明变量的时候给变量初始化:
let myName = 'Chris';

/**
 * 如果你写一个声明和初始化变量的多行JavaScript代码的程序，你可以在初始化变量之后再实际声明它，并且它仍然可以工作。
 * 这是因为变量的声明通常在其余的代码执行之前完成。
 */





// var与let的区别
/**
 * 编写一个声明并初始化变量的多行 JavaScript 程序，可以在初始化一个变量之后用 var 声明它，它仍然可以工作。
 * 这是由于变量的提升
 */
myName = 'Chris';

function logName() {
    console.log(myName);
}

logName();

var myName;

/**
 * 只有在 web 文档中运行多行 JavaScript 时才会有这种效果，当在 JavaScript 控制台中键入单独的行，这将不起作用。
 */

 /**
  * 使用 var 时，可以根据需要多次声明相同名称的变量，但是 let 不能。
  */
var myName = 'Chris';
var myName = 'Bob';

// 以下内容会在第二行引发错误
let myName = 'Chris';
let myName = 'Bob';

// 除非
let myName = 'Chris';
myName = 'Bob';





// 关于变量命名规则
/**
 * 使用拉丁字符(0-9,a-z,A-Z)和下划线字符
 * 变量名不要以下划线开头
 * 变量名不要以下划线开头
 * 一个可靠的命名约定叫做 "小写驼峰命名法"，用来将多个单词组在一起，小写整个命名的第一个字母然后大写剩下单词的首字符。
 * 让变量名直观，它们描述了所包含的数据。不要只使用单一的字母/数字，或者长句。
 * 变量名大小写敏感
 * 避免使用JavaScript的保留字给变量命名。保留字，即是组成JavaScript的实际语法的单词！因此诸如 var, function, let和 for等，都不能被作为变量名使用。浏览器将把它们识别为不同的代码项，因此你将得到错误。
 */





// 变量类型
/**
 * Number 
 * 可以在变量中存储数字，不论这些数字是像30（也叫整数）这样，或者像2.456这样的小数（也叫做浮点数）。
 * 与其他编程语言不同，在 JavaScript 中你不需要声明一个变量的类型。
 * 当你给一个变量数字赋值时，不需要用引号括起来。
 */
let myAge = 17;

/**
 * String
 * 字符串是文本的一部分。当你给一个变量赋值为字符串时，
 * 你需要用单引号或者双引号把值给包起来，
 * 否则JavaScript将会把这个字符串值理解成别的变量名。
 */
let dolphinGoodbye = 'So long and thanks for all the fish';

/**
 * Boolean
 * Boolean 的值有2种：true或false。
 * 它们通常被用于在适当的代码之后，测试条件是否成立。
 */
let iAmAlive = true;

let test = 6 < 3; 

/**
 * Array
 * 数组是一个单个对象，其中包含很多值，方括号括起来，并用逗号分隔。
 */
let myNameArray = ['Chris', 'Bob', 'Jim'];
let myNumberArray = [10, 15, 40];
// 当数组被定义后，您可以使用如下所示的语法来访问各自的值
myNameArray[0]; // should return 'Chris'
myNumberArray[2]; // should return 40
// 此处的方括号包含一个索引值，该值指定要返回的值的位置。计算机从0开始计数，而不是像我们人类那样的1。

/**
 * Object
 * 在编程中，对象是现实生活中的模型的一种代码结构。
 */
let dog = { name: 'Spot', breed: 'Dalmatian' };
dog.name; // "Spot"





// 动态类型
//声明一个变量并给它一个带引号的值，浏览器就会知道它是一个字符串
let myString = 'Hello';
//即使它包含数字，但它仍然是一个字符串

let myNumber = '500';
typeof myNumber; // "String"
myNumber = 500;
typeof myNumber; // "number"