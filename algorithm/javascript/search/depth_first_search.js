graph = {};
graph['A'] = ['B', 'C'];
graph['B'] = ['A', 'D'];
graph['C'] = ['A', 'G', 'H', 'I'];
graph['D'] = ['B', 'E', 'F'];
graph['E'] = ['D'];
graph['F'] = ['D'];
graph['G'] = ['C'];
graph['H'] = ['C'];
graph['I'] = ['C', 'J'];
graph['J'] = ['I'];

function dfs(g, start) {
  const visited = [];
  const needVisit = [];
  let node;
  needVisit.push(start);
  while (needVisit.length != 0) {
    node = needVisit.pop();
    if (!visited.find(e => e == node)) {
      visited.push(node);
      needVisit.push(...g[node]);
    }
  }
  return visited;
}

// ['A', 'C', 'I', 'J', 'H', 'G', 'B', 'D', 'F', 'E']
console.log(dfs(graph, 'A'));
