
function foo() {
    var j = 0;
    for (let i = j; i < 10; i++) {
        console.log(i);
    }
    console.log("after for");
    console.log(i);
}


foo();

