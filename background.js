const redirectMap = {
  "youtube.com": "https://www.youtube.com/watch?v=l60MnDJklnM
};

function redirect(requestDetails) {
  for (let domain in redirectMap) {
    if (requestDetails.url.includes(domain)) {
      return {
        redirectUrl: redirectMap[domain]
      };
    }
  }
  return {};
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: ["<all_urls>"] },
  ["blocking"]
);
