function solution(d, weight, trucks) {
  const complete = [];
  const onBridge = [];
  let second = 0;
  const truckLength = trucks.length;
  while (complete.length != truckLength) {
    second++;
    if (weight >= trucks[0]) {
      weight -= trucks[0];
      onBridge.push(trucks.shift());
    } else onBridge.push(0);
    if (second >= d) {
      if (onBridge[0]) {
        weight += onBridge[0];
        complete.push(onBridge.shift());
      } else onBridge.shift();
    }
  }
  return second + 1;
}
