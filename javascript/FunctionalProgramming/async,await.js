function delay(time) {
  return new Promise((resolve) => setTimeout(() => resolve(), time));
}

async function delayIdentity(a) {
  await delay(2000);
  return a;
}

async function f1() {
  const a = await delayIdentity(10);
  const b = await delayIdentity(6);

  console.log(a + b);
}
f1();
