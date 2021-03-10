/**
 * instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
 * 语法 object instanceof constructor
 * 参数 object 某个实例对象 constructor 某个构造函数
 * instanceof运算符用来检测 constructor.prototype 是否存在于参数object的原型链上
 */

/**
 * 要检测对象不是某个构造函数的实例时
 */
if (!(mycar instanceof Car)) {
    // Do something, like mycar = new Car(mycar)
}
// 等同于
// if (!mycar instanceof Car)
/***
 * 这段代码永远会得到 false（!mycar 将在 instanceof 之前被处理，所以你总是在验证一个布尔值是否是 Car 的一个实例）。
 */