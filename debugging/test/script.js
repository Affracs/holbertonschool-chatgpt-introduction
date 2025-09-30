document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.getElementById("currentTime");
  const now = new Date();
  timeElement.textContent = "Current time: " + now.toLocaleTimeString();
});
