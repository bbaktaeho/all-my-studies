# 최단 경로 알고리즘
# 방향 그래프
# 우선순위 큐
graph = {
    "A": {"B": 8, "C": 1, "D": 2},
    "B": {},
    "C": {"B": 5, "D": 2},
    "D": {"E": 3, "F": 5},
    "E": {"F": 1},
    "F": {"A": 5},
}

import heapq


# def dijkstra(graph, start):
#     # 초기화
#     distances = {node: float("inf") for node in graph}
#     distances[start] = 0
#     queue = []
#     heapq.heappush(queue, [distances[start], start])  # 우선순위 큐로 사용하기 위해 힙큐를 사용
#     #
#     while queue:
#         currentDistance, currentNode = heapq.heappop(queue)
#         print(currentDistance, currentNode)
#         if distances[currentNode] < currentDistance:
#             continue
#         for adjacent, weight in graph[currentNode].items():
#             distance = currentDistance + weight
#             if distance < distances[adjacent]:
#                 distances[adjacent] = distance
#                 heapq.heappush(queue, [distance, adjacent])

#     return distances

# 첫 정점을 기준으로 연결되어 있는 정점들을 추가해 가며, 최단 거리를 갱신하는 방법
# todo1:
# * 첫 정점부터 각 노드간의 거리르 저장하는 이터러블객체를 만든 후,
# * 첫 정점의 인접 노드 간의 거리부터 먼저 계산하면서 첫 정점부터 해당 노드간의 가장 짧은 거리를 해당 객체에 업데이트
def dijkstra(graph, start):
    # 최단 거리가 저장될 이터러블 객체
    shortDistances = {node: float("inf") for node in graph.keys()}
    # 우선순위 큐로 짧은 거리의 노드부터 꺼내서 비교
    queue = []
    # 시작 정점을 0으로 초기화
    shortDistances[start] = 0
    # 힙큐를 이용해서 우선순위 큐를 구현
    heapq.heappush(queue, [shortDistances[start], start])

    # 우선순위 큐에 정점이 있다면
    while queue:
        currentDistance, currentNode = heapq.heappop(queue)

        if shortDistances[currentNode] < currentDistance:
            continue

        for adjacent, weight in graph[currentNode].items():
            distance = currentDistance + weight
            if distance < shortDistances[adjacent]:
                shortDistances[adjacent] = distance
                heapq.heappush(queue, [distance, adjacent])

    return shortDistances


print(dijkstra(graph, "A"))
