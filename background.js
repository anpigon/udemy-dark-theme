/* Check whether new version is installed */
chrome.runtime.onInstalled.addListener(function (details) {
  /* other 'reason's include 'update' */
  if (details.reason == "install") {
    /* If first install, set uninstall URL */
    const uninstallUrlLink = "https://forms.gle/mmbmMYYx9LVyMsqUA";
    /* If Chrome version supports it... */
    if (chrome.runtime.setUninstallURL) {
      chrome.runtime.setUninstallURL(uninstallUrlLink);
    }
  }
});
