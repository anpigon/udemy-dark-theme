chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ extensionIsActive: true });
});

chrome.runtime.onSuspend.addListener(function () {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSchjZOIxmkVfDKEQOWTOyT_CS-e4DxU2qAltPAPhvhDuK5k1A/viewform?usp=sharing"
  );
});

chrome.action.onClicked.addListener((tab) => {
  chrome.storage.local.get("extensionIsActive", (data) => {
    const newState = !data.extensionIsActive;
    chrome.storage.local.set({ extensionIsActive: newState });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: updateTheme,
    });
  });
});

function updateTheme() {
  chrome.storage.local.get("extensionIsActive", (data) => {
    const customCSS = `
      :root {
        --black-color: #000000;
        --grey-color: #0e0e0e;
        --purple-color: #a435f0;
        --hover-color: #222222;
        --border-color: #303030;
      }
    `;
    const styleElement = document.createElement("style");
    styleElement.id = "extension-custom-css";
    styleElement.textContent = customCSS;
    document.head.appendChild(styleElement);
  });
}
