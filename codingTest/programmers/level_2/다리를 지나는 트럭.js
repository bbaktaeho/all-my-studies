var solution = (d, weight, trucks) => {
  const onBridge = [],
    complete = [];
  const l = trucks.length;
  let sec = 0;
  while (complete.length != l) {
    sec++;
    if (sec > d) {
      if (onBridge[0]) {
        weight += onBridge[0];
        complete.push(onBridge.shift());
      } else onBridge.shift();
    }
    if (weight >= trucks[0]) {
      weight -= trucks[0];
      onBridge.push(trucks.shift());
    } else onBridge.push(0);
  }
  return sec;
};
