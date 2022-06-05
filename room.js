function roomCheck() {
      document.getElementById("room-title").value = `공백#0001`;
      document.getElementById("room-pw").value = `9wbSN6NfhriDG2G`;
      document.getElementById("room-round").value = `6`;
      document.getElementById("room-time").value = `90`;
      document.getElementById("room-ok").click();
      setTimeout(makeRoom, 55); //50이하로 설정하면 서버오류남.
};

function makeRoom() {
      document.getElementById("NewRoomBtn").click();
      setTimeout(roomCheck, 55); //50이하로 설정하면 서버오류남.
}

makeRoom();
