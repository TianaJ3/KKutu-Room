function setTitle() {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    document.getelementbyid("SetRoomBtn").click();
    document.getelementbyid("room-title").value = `${hour}시 ${minutes}분 ${seconds}초`;
    document.getelementbyid("room-pw").value = `9wbSN6NfhriDG2G`;
    document.getelementbyid("room-ok").click();
    setTimeout(setTitle, 500);
}
setTitle();
