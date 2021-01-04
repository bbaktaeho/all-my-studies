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

// 하나의 스택과 하나의 큐로 구현
function dfs(graph, start) {
  const visited = new Set();
  // stack
  const needVisit = [];
  needVisit.push(start);

  while (visited.size != Object.keys(graph).length) {
    console.log(visited);
    const node = needVisit.pop();
    if (!visited.has(node)) {
      visited.add(node);
      needVisit.push(...graph[node]);
    }
  }
  return [...visited];
}

console.log(dfs(graph, Object.keys(graph)[0]));
