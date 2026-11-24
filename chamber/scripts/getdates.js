document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastmodified").textContent = "Last Modified: " + document.lastModified;

const time = document.getElementById("current-time");
if (time != null) {
    document.getElementById("current-time").textContent = new Date().toLocaleString();
}