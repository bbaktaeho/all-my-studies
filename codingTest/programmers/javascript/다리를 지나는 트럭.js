const solution = (bridge, weight, trucks) => {
  let complete = 0; // 트럭의 수와 같아지면 로직을 종료한다.
  const onBridge = []; // 다리를 건너고 있는 트럭들
  const truckLength = trucks.length; // 지나갈 트럭의 수
  let sec = 0;
  while (complete != truckLength) {
    sec++;
    if (sec > bridge) {
      if (onBridge[0]) complete++;
      weight += onBridge.shift();
    }
    if (trucks.length != 0 && weight >= trucks[0]) {
      weight -= trucks[0];
      onBridge.push(trucks.shift());
    } else onBridge.push(0);
  }
  return sec;
};
