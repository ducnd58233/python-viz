from collections import deque
queue = deque()
queue.append(1)  # deque([1])
queue.popleft()  # deque([])
print(queue)