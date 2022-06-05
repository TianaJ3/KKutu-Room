
function setTitle() {
  let Title = "▅▆▇█▇▆▅▄▃▂▁▂▃▄".split("");
      document.getElementById("room-title").value = Title.join("");
      document.getElementById("room-ok").click();
      setTimeout(setRoom, 55);
};

function setRoom() {
      document.getElementById("SetRoomBtn").click();
      setTimeout(setTitle, 55);
};

setRoom();
