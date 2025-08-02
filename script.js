const seatingTable = document.getElementById('seatingTable');

function assignSeat() {
    const name = document.getElementById('studentName').value.trim();
    const room = document.getElementById('roomSelect').value;
    const seat = document.getElementById('seatNumber').value.trim();

    if (!name || !seat) {
        alert("Please fill in all fields.");
        return;
    }

    // Check for duplicate seat
    const rows = seatingTable.rows;
    for (let i = 1; i < rows.length; i++) {
        const existingRoom = rows[i].cells[1].innerText;
        const existingSeat = rows[i].cells[2].innerText;
        if (room === existingRoom && seat === existingSeat) {
            alert("This seat is already assigned!");
            return;
        }
    }

    // Add new row
    const row = seatingTable.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = room;
    row.insertCell(2).innerText = seat;

    // Clear inputs
    document.getElementById('studentName').value = '';
    document.getElementById('seatNumber').value = '';
}
