//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator

function* idMaker() {
    var index = 0;
    while(true)
        yield index++;
}

var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
