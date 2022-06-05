function _fnSetAMPM(vTime) {
    const vValue = vTime.substr("0", "2");
    const vAMPM = vValue >= 12 ? "PM" : "AM";

    return vAMPM;    
}

function setTitle() {
      const date = new Date();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
        document.getElementById("room-title").value = `${vAMPM} ${hour}시 ${minutes}분 ${seconds}초`;
        document.getElementById("room-ok").click();
        setTimeout(setRoom, 55); //50이하로 설정하면 서버오류남.
  };
  
  function setRoom() {
        document.getElementById("SetRoomBtn").click();
        setTimeout(setTitle, 55); //50이하로 설정하면 서버오류남.
}
  
setRoom();
