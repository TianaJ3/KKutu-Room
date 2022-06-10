function roomCrate() {
    document.getElementById("NewRoomBtn").click();
    document.getElementById("room-title").value = `방 제목`;
    document.getElementById("room-pw").value = `9wbSN6NfhriDG2G`;
    document.getElementById("room-ok").click();
    setTimeout(roomCrate, 90);
}
roomCrate();
