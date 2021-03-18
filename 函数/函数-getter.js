/**
 * get语法将对象属性绑定到查询该属性时将被调用的函数。
 */
const obj = {
    log: ['a', 'b', 'c'],
    get latest() {
        if (this.log.length === 0) {
            return undefined;
        }
        return this.log[this.log.length - 1];
    }
};
console.log(obj.latest); // c

// 在新对象初始化时定义一个getter
// 为obj创建一个伪属性latest，它会返回log数组的最后一个元素。
// 尝试为latest分配一个值不会改变它。
const obj = {
    log: ['example', 'test'],
    get latest() {
        if (this.log.length == 0)
            return undefined;
        return this.log[this.log.length - 1];
    }
}
console.log(obj.latest); // test

// 使用delete操作符删除getter
delete obj.latest;

// 使用defineProperty在现有对象上定义 getter
var o = { a: 0 }
Object.defineProperty(o, "b", { get: function () { return this.a + 1; } });
console.log(o.b); // 1

// 使用计算出的属性名
var expr = 'foo';
var obj = {
    get [expr]() { return 'bar'; }
};
console.log(obj.foo); // bar

// get vs .defineProperty
/**
 * 当使用 get 关键字时，它和Object.defineProperty() 有类似的效果，在classes中使用时，二者有细微的差别。
 * 
 * 当使用 get 关键字时，属性将被定义在实例的原型上，当使用Object.defineProperty()时，属性将被定义在实例自身上。
 */
class Example {
    get hello() {
        return 'world';
    }
}
const obj = new Example();
console.log(obj.hello); // world

console.log(Object.getOwnPropertyDescriptor(obj, 'hello')); // undefined

console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), 'hello')); // {set: undefined, enumerable: false, configurable: true, get: ƒ}
