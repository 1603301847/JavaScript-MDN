
/**
 * 使用throw语句抛出一个异常。当你抛出异常，你规定一个含有值的表达式要被抛出。
 * throw expression;
 * 抛出任意表达式而不是特定一种类型的表达式。
 * 下面的代码抛出了几个不同类型的表达式：
*/
throw "Error2";
throw 42;
throw true;
throw { toString: function () { return "I'm an object!"; } };

/**
 * 可以在抛出异常时声明一个对象。可以在catch块中查询到对象的属性。
 */
function UserException(message) {
    this.message = message;
    this.name = "UserException";
}

