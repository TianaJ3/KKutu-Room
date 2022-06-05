
function setTitle() {
  let Title = "▅▆▇█▇▆▅▄▃▂▁▂▃▄".split("");
  Title = Title.join("");
  setInterval(() => {
      document.getElementById("room-title").value = Title
      document.getElementById("room-ok").click();
      setTimeout(setRoom, 55);
}, 55)

function setRoom() {
      document.getElementById("SetRoomBtn").click();
      setTimeout(setTitle, 55);
};

setRoom();
