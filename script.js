const banner = document.querySelector("#cookieBanner");
const acceptBtn = document.querySelector("#acceptBtn");
const declineBtn = document.querySelector("#declineBtn");
const resetBtn = document.querySelector("#resetBtn");

acceptBtn.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "accepted");
  banner.classList.add("hidden");
});

declineBtn.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "declined");
  banner.classList.add("hidden");
});

resetBtn.addEventListener("click", () => {
  localStorage.removeItem("cookieConsent");
  banner.classList.remove("hidden");
});

function checkCookieConsent() {
  const consent = localStorage.getItem("cookieConsent");
  if (consent) {
    banner.classList.add("hidden");
  }
}

checkCookieConsent();
