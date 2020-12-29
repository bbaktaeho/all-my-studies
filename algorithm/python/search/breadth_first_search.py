graph = dict()
graph["A"] = ["B", "C"]
graph["B"] = ["A", "D"]
graph["C"] = ["A", "G", "H", "I"]
graph["D"] = ["B", "E", "F"]
graph["E"] = ["D"]
graph["F"] = ["D"]
graph["G"] = ["C"]
graph["H"] = ["C"]
graph["I"] = ["C", "J"]
graph["J"] = ["I"]


def bfs(g, start):
    needVisit = []
    visited = []
    needVisit.append(start)
    while needVisit:
        node = needVisit.pop(0)
        if node not in visited:
            visited.append(node)
            needVisit.extend(g[node])
    return visited


print(bfs(graph, "A"))
