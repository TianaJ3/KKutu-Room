
function setTitle() {
  let Title = "▅▆▇█▇▆▅▄▃▂▁▂▃▄".split("");
  TitlesInterval = setInterval(() => {
      document.getElementById("room-title").value = Title.join("");
      document.getElementById("room-ok").click();
      setTimeout(makeRoom, 55);
};

function makeRoom() {
      document.getElementById("SetRoomBtn").click();
      setTimeout(setTitle, 55);
};

makeRoom();
