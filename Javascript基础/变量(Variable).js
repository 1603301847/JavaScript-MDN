/***
* 变量是存储值的容器。 要声明一个变量，先输入关键字 let 或 var，然后输入合适的名称
*/

let myVariable;

// 变量定义后可以进行赋值：
myVariable = '李雷';

// 也可以将定义、赋值操作写在同一行
let myVariable = '李雷';

// 可以直接通过变量名取得变量值
myVariable;

// 变量在赋值后是可以更改的：
let myVariable = '李雷';
myVariable = '韩梅梅';


/**
 * 变量可以有不同的数据类型
 */

// String 字符串（一串文本）：字符串的值必须用引号（单双均可，必须成对）扩起来。
let myVariable = '李雷';

// Number 数字：无需引号
let myVariable = 10;

// Boolean 布尔值（真/假）： true/false是JS里的特殊关键字，无需引号。
let myVariable = true;

// Array 数组：用于在单一引用存储多个值得结构。
let myVariable = [1, "李雷", "韩梅梅", 10];
// 元素引用方法： myVariable[0], myVariable[1]......

// Object 对象：JavaScript里一切皆对象，一切皆可储存在变量里。
let myVariable = document.querySelector('h1');
