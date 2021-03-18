/**
 * 当尝试设置属性时，set语法将对象属性绑定到要调用的函数
 */
const language = {
    set current(name) {
        this.log.push(name);
    },
    log: []
};

language.current = 'EN';
language.current = 'FA';

console.log(language.log); // ["EN", "FA"]

// 在对象初始化时定义setter
/**
 * 定义一个对象 language 的伪属性current，当current被分配一个值时，将使用该值更新log
 * current属性是未定义的，访问它时将会返回 undefined
 */
const language = {
    set current(name) {
        this.log.push(name);
    },
    log: []
}
language.current = 'EN';
console.log(language.log); // ["EN"]

language.current = 'FA';
console.log(language.log); // ["FA"]

// 用delete操作符移除一个setter
delete language.current;

// 使用 defineProperty 为当前对象定义 setter
// 使用 Object.defineProperty() 给一个已经存在的对象添加一个 setter
const o = { a: 0 };
Object.defineProperty(o, "b", { set: function (x) { this.a = x / 2; } });
o.b = 10;
console.log(o.a); // 5

// 使用计算属性名
const expr = "foo";
const obj = {
    baz: "bar",
    set [expr](v) { this.baz = v; }
};
console.log(obj.baz); // bar
obj.foo = "baz"; // "baz"
console.log(obj.baz); // baz