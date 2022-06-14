function roomCrate() {
    document.getElementById("NewRoomBtn").click();
    document.getElementById("room-title").value = `title`;
    document.getElementById("room-pw").value = `password`;
    document.getElementById("room-ok").click();
    setTimeout(roomCrate, 90);
}
roomCrate();
