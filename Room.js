function roomCrate() {
    document.getElementById("NewRoomBtn").click();
    document.getElementById("room-title").value = `공백#0001`;
    document.getElementById("room-pw").value = `9wbSN6NfhriDG2G`;
    document.getElementById("room-round").value = `6`;
    document.getElementById("room-time").value = `90`;
    document.getElementById("room-ok").click();
    setTimeout(roomCrate, 85);
}
roomCrate();
