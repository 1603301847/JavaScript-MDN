/**
 * 把字符串当作对象
 */
let string = 'This is my string';

/**
 * 获得字符串的长度
 */
let browserType = 'mozilla';
browserType.length;

/**
 * 检索特定字符串字符
 * 使用方括号表示法返回字符串中的任何字符 - 这意味着您可以在变量名的末尾包含方括号（[ ]）。 在方括号内，您可以包含要返回的字符的编号
 * 例如，您要检索第一个字母，可以这样做：
 */
browserType[0];
//要检索任何字符串的最后一个字符
browserType[browserType.length - 1];

/**
 * 在字符串中查找子字符串并提取它
 */
browserType.indexOf('zilla'); // 2
browserType.indexOf('vanilla'); // -1 在主字符串中找不到子字符串将返回 -1。
// 查找不包含子串“mozilla”的所有字符串
if (browserType.indexOf('mozilla') !== -1) {
    
}
// 字符串中的子字符串开始的位置，以及想要结束的字符时，slice()可以用来提取它
browserType.slice(0, 3); // "moz"
// 要在某个字符之后提取字符串中的所有剩余字符，则不必包含第二个参数，而只需要包含要从中提取的字符位置 字符串中的其余字符
browserType.slice(2); // "zilla"

/**
 * 转换大小写
 * 字符串方法toLowerCase()和toUpperCase()字符串并将所有字符分别转换为小写或大写。
 */
let radData = 'My NaMe Is MuD';
radData.toLowerCase(); // "my name is mud"
radData.toUpperCase(); // "MY NAME IS MUD"

/**
 * 替换字符串的某部分
 */
// 使用replace()方法将字符串中的一个子字符串替换为另一个子字符串。
browserType.replace('moz', 'van'); // "vanilla"