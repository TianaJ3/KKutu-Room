
function roomCheck() {
      const date = new Date();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      document.getElementById("room-title").value = `${hour}시 ${minutes}분 ${seconds}초`;
      document.getElementById("room-pw").value = `9wbSN6NfhriDG2G`;
      document.getElementById("room-round").value = `6`;
      document.getElementById("room-time").value = `90`;
      document.getElementById("room-ok").click();
      setTimeout(makeRoom, 55);
};

function makeRoom() {
      document.getElementById("NewRoomBtn").click();
      setTimeout(roomCheck, 55);
};

makeRoom();
