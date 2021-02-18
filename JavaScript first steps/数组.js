/**
 * 创建数组
 */
let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping;
// 数组中的每个项目都是一个字符串
// 可以将任何类型的元素存储在数组中 - 字符串，数字，对象，另一个变量，甚至另一个数组。
// 可以混合和匹配项目类型 - 它们并不都是数字，字符串等。
let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ['tree', 795, [0, 1, 2]];

/**
 * 访问和修改数组元素
 */
shopping[0];

shopping[0] = 'tahini';
shopping; // [ "tahini", "milk", "cheese", "hummus", "noodles" ]

// 访问数组内的另一个数组
random[2][2]; // 2

/**
 * 获取数组长度
 */
sequence.length;

let sequence = [1, 1, 2, 3, 5, 8, 13];
for (let i = 0; i < sequence.length; i++) {
    console.log(sequence[i]);
}

/**
 * 字符串和数组之间的转换
 */
// split() 方法 将字符串转换为数组
let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
myArray; // ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle"]

// join() 方法 将数组转换为字符串
let myNewString = myArray.join(',');
myNewString; // "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"

// 将数组转换为字符串的另一种方法是使用 toString() 方法。 
// toString() 可以比 join() 更简单，因为它不需要一个参数，但更有限制。 
// 使用 join() 可以指定不同的分隔符。
let dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames.toString(); //Rocket,Flash,Bella,Slugger

/**
 * 添加和删除数组项
 */

// push() 添加一个或多个要添加到数组末尾的元素
let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
myArray.push('Cardiff');
myArray; // ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff"]
myArray.push('Bradford', 'Brighton');
myArray; // ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff", "Bradford", "Brighton"]
// 当方法调用完成时，将返回数组的新长度。 如果要将新数组长度存储在变量中。
var newLength = myArray.push('Bristol');
myArray; // 10
newLength; // 11

// pop() 从数组中删除最后一个元素
myArray.pop(); // "Bristol"
// 当方法调用完成时，将返回已删除的项目。
let removedItem = myArray.pop();
myArray; // ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff", "Bradford"]
removedItem; // "Bradford"

// unshift() 添加一个或多个要添加到数组开头的元素
myArray.unshift('Edinburgh');
myArray; // ["Edinburgh", "Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff"]

// shift() 从数组开头删除第一个元素
// 当方法调用完成时，将返回已删除的项目。
let removedItem = myArray.shift();
myArray; // ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff"]
removedItem; // "Manchester"