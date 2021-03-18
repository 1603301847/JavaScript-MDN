/**
    * 在对象初始器中引入了一种更简短定义方法的语法，这是一种把方法名直接赋给函数的简写方式。 
*/
const obj = {
    foo() {
        return 'bar';
    }
};

console.log(obj.foo()); // bar

/**
 * var obj = {
 *   foo: function() {
 *  },
 *  bar: function() {
 *  }
 * }
 * 可简写为：
 * var obj = {
 *  foo() {
 *  },
 *  bar() {
 *  }
 * }
 */



// 生成器的方法
/**
 * 简写语法中的星号（*）必须出现在生成器名前，也就是说* g(){}可以正常工作，而g *(){}不行。
 * 非生成器方法定义可能不包含yield关键字。这意味着遗留的生成器函数也不会工作，并且将抛出 SyntaxError。
 * 始终使用yield与星号（*）结合使用。
 */
// 用有属性名的语法定义方法（ES6之前）：
var obj2 = {
    g: function* () {
        var index = 0;
        while (true)
            yield index++;
    }
};
// 同一个方法，简写语法
// var obj2 = {
//     *g() {
//         var index = 0;
//         while(true)
//         yield index++;
//     }
// };

var it = obj2.g();
console.log(it.next().value);
console.log(it.next().value);



//Async 方法
var obj3 = {
    f: async function () {
        await some_promise;
    }
}
// 同一个方法，简写语法
var obj3 = {
    async f() {
        await some_promise;
    }
}

// Async 生成器方法: 生成器方法也能成为 async.
var obj4 = {
    f: async function* () {
        yield 1;
        yield 2;
        yield 3;
    }
};
// 同一个方法，简写语法
var obj4 = {
    async *f() {
        yield 1;
        yield 2;
        yield 3;
    }
};



// 方法定义不是构造函数
var obj = {
    method() { }
};
new obj.method; // Uncaught SyntaxError: Identifier 'obj' has already been declared

var obj = {
    * g() { }
};
new obj.g; // Uncaught SyntaxError: Identifier 'obj' has already been 



// 示例
var obj = {
    a: "foo",
    b() { return this.a; }
};
console.log(obj.b()); // foo



// 计算属性名
var bar = {
    foo0: function () { return 0; },
    foo1() { return 1; },
    ['foo' + 2]() { return 2; }
}
console.log(bar.foo0); // ƒ () { return 0; }
console.log(bar.foo1); // ƒ foo1() { return 1; }
console.log(bar.foo2); // ƒ ['foo' + 2]() { return 2; }