function setTitle() {
      const date = new Date();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
        document.getElementById("room-title").value = `${hour}시 ${minutes}분 ${seconds}초`;
        document.getElementById("room-ok").click();
        setTimeout(setRoom, 50); 
  };
  
  function setRoom() {
        document.getElementById("SetRoomBtn").click();
        setTimeout(setTitle, 50); 
}
  
setRoom();
