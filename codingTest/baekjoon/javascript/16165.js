const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  const TEAM_MEMBER = {};
  const MEMBER_TEAM = {};
  let [N, M] = input.shift().split(' ');
  while (N--) {
    let teamName = input.shift();
    let memberNumber = +input.shift();
    TEAM_MEMBER[teamName] = [];
    while (memberNumber--) {
      let memberName = input.shift();
      TEAM_MEMBER[teamName].push(memberName);
      MEMBER_TEAM[memberName] = teamName;
    }
  }

  while (M--) {
    let quiz = input.shift();
    let check = +input.shift();
    if (check) console.log(MEMBER_TEAM[quiz]);
    else for (i of TEAM_MEMBER[quiz].sort()) console.log(i);
  }
});
