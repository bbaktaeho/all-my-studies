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

function bfs(g, start) {
  const visited = [];
  const needVisit = [];

  needVisit.push(start);
  while (needVisit.length != 0) {
    const node = needVisit.shift();
    if (!visited.find(e => e == node)) {
      visited.push(node);
      needVisit.push(...g[node]);
    }
  }
  return visited;
}
// ['A', 'B', 'C', 'D', 'G', 'H', 'I', 'E', 'F', 'J']
console.log(bfs(graph, 'A'));
