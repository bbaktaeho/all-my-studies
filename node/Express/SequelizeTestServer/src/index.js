const db = require('./db/models');

// Promises
function getTasksPromise() {
  db.Task.findAll()
    .then((tasks) => {
      tasks.forEach((task) => {
        console.log(task.taskName);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

// Async Await
async function getTasksAsync() {
  try {
    const tasks = await db.Task.findAll();
    tasks.forEach((task) => {
      console.log(task.taskName);
    });
  } catch (err) {
    console.log(err);
  }
}

async function createUser(name) {
  // String
  const user = await db.User.create({ name });

  return user;
}

async function getUser(name) {
  //String
  const user = await db.User.findOne({ where: { name } });

  return user;
}

async function assignTaskToUser(task, user) {
  // Task Object // user = String || object || int
  await task.setUser(user);
}

async function listAllUserTaks(user) {
  // user object
  tasks = await user.getTasks();
  tasks.forEach((task) => {
    console.log(task.taskName);
  });
}

getTasksPromise();
getTasksAsync();
