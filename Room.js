function roomCrate() {
    document.getelementbyid("NewRoomBtn").click();
    document.getelementbyid("room-title").value = `공백#0001`;
    document.getelementbyid("room-pw").value = `9wbSN6NfhriDG2G`;
    document.getelementbyid("room-round").value = `6`;
    document.getelementbyid("room-time").value = `90`;
    document.getelementbyid("room-ok").click();
    setTimeout(roomCrate, 85);
}
roomCrate();
