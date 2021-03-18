/**
 * function* 这种声明方式(function关键字后跟一个星号）会定义一个生成器函数 (generator function)，它返回一个 Generator 对象。
 */
function* generator(i) {
    yield i;
    yield i + 10;
}
const gen = generator(10);
console.log(gen.next().value); // 10
console.log(gen.next().value); // 20



/**
 * 生成器函数在执行时能暂停，后面又能从暂停处继续执行。
 * 调用一个生成器函数并不会马上执行它里面的语句，而是返回一个这个生成器的迭代器对象。
 * 当这个迭代器的 next()方法被首次（后续）调用时，其内的语句会执行到第一个（后续）出现yield的位置为止，yield后紧跟迭代器要返回的值。
 * 或者如果用的是 yield*（多了个星号），则表示将执行权移交给另一个生成器函数（当前生成器暂停执行）。
 * 
 * next()方法返回一个对象，这个对象包含两个属性：value 和 done，
 * value 属性表示本次 yield 表达式的返回值，done 属性为布尔类型，
 * 表示生成器后续是否还有 yield 语句，即生成器函数是否已经执行完毕并返回。
 * 
 * 调用 next()方法时，如果传入了参数，那么这个参数会传给上一条执行的 yield语句左边的变量
 */
function* gen() {
    yield 10;
    x = yield 'foo';
    yield x;
}

var gen_obj = gen();
console.log(gen_obj.next()); // {value: 10, done: false}
console.log(gen_obj.next()); // {value: "foo", done: false}
console.log(gen_obj.next(100)); // {value: 100, done: false}
console.log(gen_obj.next()); // {value: undefined, done: true}

/**
 * 当在生成器函数中显式 return 时，会导致生成器立即变为完成状态，即调用 next() 方法返回的对象的 done 为 true。
 * 如果 return 后面跟了一个值，那么这个值会作为当前调用 next() 方法返回的 value 值。
 */



// 示例
function* idMaker() {
    var index = 0;
    while (index < 3)
        yield index++;
}
var gen = idMaker();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined


// 生成器也可以接受参数
function* idMaker() {
    var index = arguments[0] || 0;
    while (true)
        yield index++;
}
var gen = idMaker(5);
console.log(gen.next().value); // 5
console.log(gen.next().value); // 6



// yield*的示例
function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}

function* generator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20



// 传递参数
function* createIterator() {
    let first = yield 1;
    let second = yield first + 2;
    yield second + 3;
}

let iterator = createIterator();

console.log(iterator.next());  // {value: 1, done: false}
console.log(iterator.next(4)); // {value: 6, done: false}
console.log(iterator.next(5)); // {value: 8, done: false}
console.log(iterator.next());  // {value: undefined, done: true}



// 显示返回
function* yieldAndReturn() {
    yield "Y";
    yield "R";
    yield "unreachable";
}

var gen = yieldAndReturn();
console.log(gen.next()); // {value: "Y", done: false}
console.log(gen.next()); // {value: "R", done: true}
console.log(gen.next()); // { value: undefined, done: true }



// 生成器函数不能当构造器使用
function* f() { }
var obj = new f; // Uncaught TypeError: f is not a constructor