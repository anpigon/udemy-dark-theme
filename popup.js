document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");

  chrome.storage.local.get("extensionIsActive", (data) => {
    if (data.extensionIsActive) {
      toggleButton.textContent = "TURN OFF";
    } else {
      toggleButton.textContent = "TURN ON";
    }
  });
  toggleButton.addEventListener("click", () => {
    chrome.storage.local.get("extensionIsActive", (data) => {
      const newState = !data.extensionIsActive;
      chrome.storage.local.set({ extensionIsActive: newState });

      toggleButton.textContent = newState ? "TURN OFF" : "TURN ON";

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs[0]) {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ["content.js"],
          });
        }
      });
    });
  });
});
