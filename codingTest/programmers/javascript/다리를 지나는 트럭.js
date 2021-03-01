const solution = (bridge, weight, trucks) => {
  let completed = 0; // 건너간 트럭의 수
  let trucksCount = trucks.length; // 총 트럭의 수
  let second = 0; // 모든 트럭이 건너는 시간
  const onBridge = []; // 다리를 건너는 트럭 리스트 (큐)

  while (completed != trucksCount) {
    // 건너간 트럭의 수와 모든 트럭의 수가 같아지면 종료
    second++;
    if (second > bridge) {
      // 다리를 건넌 트럭이 있는지
      onBridge[0] != 0 ? completed++ : undefined;
      weight += onBridge.shift();
    }

    if (weight >= trucks[0]) {
      // 버틸 수 있는 무게와 같거나 작은 트럭이 진입할 때
      weight -= trucks[0];
      onBridge.push(trucks.shift());
    } else onBridge.push(0); // 버틸 수 없다면 임시로 0을 푸시해서 시간을 보냄
  }
  return second;
};
