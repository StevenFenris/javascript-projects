function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
   button.addEventListener("click", function() {
        paragraph.innerHTML = "Houston, we have liftoff!";
    });
   missionAbort.addEventListener("mouseover", function() {
        missionAbort.style.background = "red";
    });    
}

window.addEventListener("load", init);
