function setTitle() {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    document.getElementById("SetRoomBtn").click();
    document.getElementById("room-title").value = `${hour}시 ${minutes}분 ${seconds}초`;
    document.getElementById("room-pw").value = `9wbSN6NfhriDG2G`;
    document.getElementById("room-ok").click();
    setTimeout(setTitle, 500);
}
setTitle();
