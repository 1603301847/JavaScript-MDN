/**
 * 创建一个字符串
 */
let string = 'The revolution will not be televised.';
string;  // "The revolution will not be televised."

// 没有引号的任何文本字符串都被假定为变量名、属性名、保留字或类似。如果浏览器不能找到它，那么将会引发语法错误
// 如果浏览器能够识别字符串从哪里开始，但是不能找到字符串的结尾符，那么将会引发语法错误
let badString = This is a test; // Uncaught SyntaxError: Unexpected identifier
let badString = 'This is a test; // Uncaught SyntaxError: Invalid or unexpected token
let badString = This is a test'; // Uncaught SyntaxError: Unexpected identifier

let badString = string;
badString; // "The revolution will not be televised."





/**
 * 单引号和双引号
 */
// 1.在JavaScript中，您可以选择单引号或双引号来包裹字符串。
let sgl = 'Single quotes.';
let dbl = "Double quotes";
sgl;
dbl;
// 2.不一致的引号会报错
let badQuotes = 'What on earth?";
// 3.浏览器会认为字符串没有被关闭，因为在字符串中您没有使用其他类型的引号。
// 以下情况可以
let sglDbl = 'Would you eat a "fish supper"?';
let dblSgl = "I'm feeling blue.";
sglDbl;
dblSgl;
// 4.不能在字符串中包含相同的引号，因为它是用来包含它们的。
let bigmouth = 'I've got no right to take my place...';





/**
 * 转义字符串中的字符 
 */
let bigmouth = 'I\'ve got no right to take my place...';
bigmouth;


// 连接字符串：在JavaScript中连接字符串使用加号(+)操作符，也用它来将数字加在一起
let one = 'Hello, ';
let two = 'how are you?';
let joined = one + two;
joined; //  "Hello, how are you?"
// 真实的字符串和变量来混合
let response = one + 'I am fine — ' + two;
response; // "Hello, I am fine — how are you?"





/**
 * 数字与字符
 */
// 1. 添加(或连接)一个字符串和一个数字
'Front ' + 242;
// 2. 用引号将数字包装成一个字符串（使用typeof操作符来检查变量是一个数字还是一个字符串）
let myDate = '19' + '67';
typeof myDate;
// 3. 将一个字符串转换为一个数字而不改变其其他地方
//  Number 对象将把传递给它的任何东西转换成一个数字
let myString = '123';
let myNum = Number(myString);
typeof myNum; // "number"
// 每个数字都有一个名为 toString() 的方法，它将把它转换成等价的字符串
let myNum = 123;
let myString = myNum.toString();
typeof myString; // "string"
