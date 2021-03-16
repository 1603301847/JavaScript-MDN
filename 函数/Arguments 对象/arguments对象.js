/**
 * arguments 是一个对应于传递给函数的参数的类数组对象。
 * arguments对象是所有（非箭头）函数中都可用的局部变量。
 * 使用arguments对象在函数中引用函数的参数。
 * 此对象包含传递给函数的每个参数，第一个参数在索引0处。
 * 如果一个函数传递了三个参数，可以使用如下方式引用
 */
arguments[0]
arguments[1]
arguments[2]

// 参数也可以被设置
arguments[1] = 'new value';

/**
 * arguments对象不是一个Array
 * 它类似于Array，但除了length属性和索引元素之外没有任何Array属性
 * 它没有pop方法，但可以转换为一个真正的Array
 */
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

// 等价于
const args = Array.from(arguments);
const args = [...arguments];

/**
 * 对参数使用slice会阻止某些JavaScript引擎中的优化
 */