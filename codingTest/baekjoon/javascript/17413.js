let rl = require("readline").createInterface({ input: process.stdin, output: process.stdout });

let input;
rl.on("line", line => {
  input = line;
}).on("close", () => {
  let result = "";
  let temp = "";
  let ck = false;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == "<") {
      ck = true;
      result += temp.split("").reverse().join("") + "<";
      temp = "";
    } else if (input[i] == ">") {
      ck = false;
      result += ">";
    } else if (input[i] == " ") {
      result += temp.split("").reverse().join("") + " ";
      temp = "";
    } else {
      if (ck) result += input[i];
      else temp += input[i];
    }
  }
  result += temp.split("").reverse().join("");
  console.log(result);
});
