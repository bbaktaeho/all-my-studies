const graph = {};
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

// 두 개의 큐로 구현하기
function bfs(graph, start) {
  const visited = new Set();
  const needVisit = [];
  needVisit.push(start);

  while (visited.size != Object.keys(graph).length) {
    const node = needVisit.shift();
    if (!visited.has(node)) {
      visited.add(node);
      needVisit.push(...graph[node]);
    }
  }
  return [...visited];
}

console.log(bfs(graph, Object.keys(graph)[0]));
