let ws;

window.addEventListener("DOMContentLoaded", () => {
  ws = new WebSocket(`ws://localhost:3000/ws`);
  ws.addEventListener("open", onConnectionOpen);
  ws.addEventListener("open", onMessageReceived);
});

function onConnectionOpen() {
  console.log("connection opened");
}
function onMessageReceived(event) {
  console.log("message received", event);
}
