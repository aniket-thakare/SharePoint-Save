const urlBox = document.getElementById("urlBox");
const fileName = document.getElementById("fileName");
const cmdBox = document.getElementById("commandBox");
const copyBtn = document.getElementById("copyBtn");
const genBtn = document.getElementById("generate");

chrome.storage.local.get("sharepointUrl", d => {
  if (d.sharepointUrl) urlBox.value = d.sharepointUrl;
});

genBtn.onclick = () => {
  chrome.storage.local.get("sharepointUrl", d => {
    if (!d.sharepointUrl) return;
    let f = fileName.value.trim() || "video.mp4";
    if (!f.endsWith(".mp4")) f += ".mp4";
    cmdBox.value = `ffmpeg -y -i "${d.sharepointUrl}" -codec copy ${f}`;
    genBtn.classList.add("copied");
    copyBtn.classList.remove("copied");
  });
};

copyBtn.onclick = () => {
  navigator.clipboard.writeText(cmdBox.value);
  copyBtn.classList.add("copied");
};