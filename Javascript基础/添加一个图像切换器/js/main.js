// window.onload = function () {
    let myImages = document.querySelector('img');
    myImages.onclick = function () {
        /**
         * getAttribute() 方法通过名称获取属性的值。
         * setAttribute() 方法添加指定的属性，并为其赋指定的值。
         */
        let mySrc = myImages.getAttribute('src');
        if (mySrc === './images/firefox1.png') {
            myImages.setAttribute('src', './images/firefox2.png');
        } else {
            myImages.setAttribute('src', './images/firefox1.png')
        }
    }
// }