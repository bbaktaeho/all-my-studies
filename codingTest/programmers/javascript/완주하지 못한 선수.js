const solution = (participants, completion) => {
  participants.sort();
  completion.sort();
  const [participant] = participants.filter((e, i) => e != completion[i]);
  return participant;
};
