function startTimer() {
    let focusMinutes = document.getElementById("focusTime").value;
    if (focusMinutes <= 0) {
        alert("Enter a valid focus time!");
        return;
    }

    let focusSeconds = focusMinutes * 60;
    let breakSeconds = focusSeconds / 3;
    
    let timerDisplay = document.getElementById("timerDisplay");

    timerDisplay.innerHTML = `Focus Time: ${focusMinutes} minutes`;
    
    setTimeout(() => {
        timerDisplay.innerHTML = `Break Time: ${Math.floor(breakSeconds / 60)} minutes`;
    }, focusSeconds * 1000);
}