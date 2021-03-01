function solution(n, record) {
  var servers = Array.from(Array(n), () => []);
  for (const item of record) {
    let [i, user] = item.split(" ");
    if (!servers[i - 1].find(e => e == user)) {
      if (servers[i - 1].length == 5) servers[i - 1].shift();
      servers[i - 1].push(user);
    }
  }
  const result = [];
  for (const server of servers) if (server.length != 0) result.push(server);
  return result.flat();
}
