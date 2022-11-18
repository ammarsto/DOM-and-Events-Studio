// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    const takeoffButton = document.getElementById("takeoff");
    takeoffButton.addEventListener("click", function() {
        let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmation) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = 10000;
        }
    })
    const landButton = document.getElementById("landing");
    landButton.addEventListener("click", function() {
        let confirmation = window.confirm("Confirm that tThe shuttle is landing. Landing gear engaged.");
        if (confirmation) {
            document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }
    })
    const abortButton = document.getElementById("missionAbort");
    abortButton.addEventListener("click", function() {
        let confirmation = window.confirm("Confirm that you want to abort the mission.");
        if (confirmation) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }
    })
    let shuttleHeight = 10000;
    const upButton = document.getElementById("up");
    upButton.addEventListener("click", function() {
        shuttleHeight += 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;
        document.getElementById("rocket").style.top=200;  
    })
});