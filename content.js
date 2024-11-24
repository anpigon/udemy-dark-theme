const link = document.createElement("link");
link.href = chrome.runtime.getURL("dark-theme.css");
link.type = "text/css";
link.rel = "stylesheet";
document.head.appendChild(link);
