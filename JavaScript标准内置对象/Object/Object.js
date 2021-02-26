/**
 * Object 构造函数创建一个对象包装器
 * 
 * 对象初始化器（Object initialiser）或对象字面量（literal）
 * { [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] }
 * 参数： nameValuePair1, nameValuePair2, ... nameValuePairN 成对的名称（字符串）与值（任何值），其中名称通过冒号与值分隔。
 * 
 * 以构造函数形式来调用
 * new Object([value])
 * 参数：value任何值。
 * 
 * 在JavaScript中，几乎所有的对象都是Object类型的实例，它们都会从Object.prototype继承属性和方法。
 * Object 构造函数为给定值创建一个对象包装器。Object构造函数，会根据给定的参数创建对象
 * 如果给定值是 null 或 undefined，将会创建并返回一个空对象
 * 如果传进去的是一个基本类型的值，则会构造其包装类型的对象
 * 如果传进去的是引用类型的值，仍然会返回这个值，经他们复制的变量保有和源对象相同的引用地址
 * 当以非构造函数形式被调用时，Object 的行为等同于 new Object()。
 */