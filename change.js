
function setTitle() {
        document.getElementById("room-title").value = `test`
        document.getElementById("room-ok").click();
        setTimeout(setRoom, 55);
  };
  
  function setRoom() {
        document.getElementById("SetRoomBtn").click();
        setTimeout(setTitle, 55);
  }
  
setRoom();
