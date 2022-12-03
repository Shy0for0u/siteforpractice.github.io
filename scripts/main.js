var myImage = document.querySelector('img');
/*
myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/images.png') {
        myImage.setAttribute('src', 'images/picture2.jpg');
    } else {
        myImage.setAttribute('src', 'images/images.png');
    }
}

myImage.onclick = function () {
    var src = document.getElementById("demo").innerHTML;
    if (src === 'picture1') {
        document.getElementById("demo").innerHTML = 'picture2';
    } else {
        document.getElementById('demo').innerHTML = 'picture1';
    }
}
*/

myImage.onclick = function () {
    var picSrc = myImage.getAttribute('src');
    if (picSrc === 'images/images.png') {
        document.getElementById("demo").innerHTML = "picture2";
        myImage.setAttribute('src', 'images/picture2.jpg');
    } else {
        document.getElementById("demo").innerHTML = "picture1";
        myImage.setAttribute('src', 'images/images.png');
    }
}


document.querySelector('li').onclick = function () {
    alert('pick your mom, small shit!');
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
