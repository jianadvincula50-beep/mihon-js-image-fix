// Mihon JS Image Fix (Bato Extension)
// Rewrites image URLs from //k to //n and removes referrer

(function () {
  // Only run on Mihon app domain
  if (!window.location.hostname.includes("mihon")) return;

  setInterval(() => {
    document.querySelectorAll("img").forEach((img) => {
      if (img.src.includes("//k") && img.src.includes(".mb")) {
        img.referrerPolicy = "no-referrer";
        img.src = img.src.replace("//k", "//n");
      }
    });
  }, 2000);
})();