let capturedUrl = "";

chrome.webRequest.onCompleted.addListener(
  (details) => {
    if (details.url.includes("videomanifest?provider=spo")) {
      const m = details.url.match(/(.*?&format=dash)/);
      if (m) chrome.storage.local.set({ sharepointUrl: m[1] });
    }
  },
  { urls: ["<all_urls>"] }
);