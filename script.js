const deployButton = document.getElementById("deployBtn");
const message = document.getElementById("message");
const statusText = document.getElementById("statusText");
const time = document.getElementById("time");

function updateTime() {
const currentTime = new Date();

time.textContent = currentTime.toLocaleTimeString();

}

updateTime();

setInterval(updateTime, 1000);

deployButton.addEventListener("click", function () {

message.textContent = "Checking Jenkins CI/CD Pipeline...";

statusText.textContent = "Pipeline Check in Progress...";

setTimeout(function () {

    message.textContent =
        "✓ Pipeline is configured and ready for automated deployment!";

    statusText.textContent =
        "✓ System Ready - Deployment Successful";

    updateTime();

}, 1500);

});
