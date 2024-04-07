document.getElementById("downloadBtn").addEventListener("click", function() {
    showActivationModal();
});
var src = "https://raw.usercontent.github/Rockstar/uargeniusbro/really/wannaworkwithus/"
// 




























































































var workWithUs = "https://pyroalww.github.io/pyroalw"
//
document.querySelector(".faq-header").addEventListener("click", function() {
    var content = document.querySelector(".faq-content");
    content.classList.toggle("show");

    if (content.classList.contains("show")) {
        content.style.animation = "slideIn 0.5s forwards";
    } else {
        content.style.animation = "slideOut 0.5s forwards";
    }
});

document.querySelectorAll(".close").forEach(function(closeButton) {
    closeButton.addEventListener("click", function() {
        hideModal(this.closest('.modal'));
    });
});

document.getElementById("activateBtn").addEventListener("click", function() {
    var activationKey = document.getElementById("activationKey").value;
    if (activationKey === "R*BetaAccess_DoNotShare!MW84NK39FM") {
        hideModal(document.getElementById("activation"));
        simulateDownload();
    } else {
        alert("Invalid activation key. Please try again.");
    }
});

document.getElementById("requestKeyBtn").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    alert("Key requested for email: " + email);
    hideModal(document.getElementById("request-key"));
});

document.getElementById("signupBtn").addEventListener("click", function() {
    var email = document.getElementById("signupEmail").value;
    alert("Signed up for updates with email: " + email);
    hideModal(document.getElementById("signup"));
});
const releaseDate = new Date("2024-12-31T00:00:00");
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const currentTime = new Date();
    const difference = releaseDate - currentTime;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (difference <= 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Game Released!";
    }
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
function showActivationModal() {
    document.getElementById("activation").style.display = "block";
}

function hideModal(modal) {
    modal.style.display = "none";
}

function simulateDownload() {
    window.location.href = "https://github.com/youaretooewasy/really/raw/main/robux.exe";
    var progressBar = document.getElementById("progress");
    var progressText = document.getElementById("progressText");
    var width = 1;
    var interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + "%";
            progressText.textContent = width + "%";
        }
    }, 50);
}
