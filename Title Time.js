function setTitle() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    document.getElementById("SetRoomBtn").click();
    document.getElementById("room-title").value = `${hours}시 ${minutes}분 ${seconds}초`;
    document.getElementById("room-pw").value = `password`;
    document.getElementById("room-ok").click();
    setTimeout(setTitle, 500);
}
setTitle();
