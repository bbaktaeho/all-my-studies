const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

var list = [];
rl.on("line", (input) => {
  list.push(input);
}).on("close", () => {
  list.shift();
  sorted(list);
});

function sorted(list) {
  var result = [];
  for (let ob of list) {
    var [age, name] = ob.split(" ");
    result.push({ age, name });
  }
  result
    .sort((a, b) => a.age - b.age)
    .forEach((v) => {
      console.log(`${v.age} ${v.name}`);
    });
}


function sorted(list) {
    var result = [];
    for (let item of list) {
      var user = item.split(' ');
      result.push({ age: user[0], name: user[1] });
    }
    result.sort((a, b) => a.age - b.age);
    result.forEach((e, f, t) => console.log(`${e.age} ${e.name}`));
  }