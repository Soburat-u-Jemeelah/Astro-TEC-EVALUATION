(function () {
  "use strict";

  // Block right-click / Inspect context menu
  document.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
      return false;
    },
    true
  );

  // Block common DevTools / View Source shortcuts
  document.addEventListener(
    "keydown",
    function (e) {
      const key = e.key || "";
      const lower = key.toLowerCase();
      const ctrlOrMeta = e.ctrlKey || e.metaKey;

      // F12
      if (key === "F12" || e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl/Cmd + Shift + I / J / C (Inspect, Console, Elements)
      if (ctrlOrMeta && e.shiftKey && ["i", "j", "c"].includes(lower)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl/Cmd + U (View Source)
      if (ctrlOrMeta && lower === "u") {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Ctrl/Cmd + S (Save page)
      if (ctrlOrMeta && lower === "s") {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Mac: Cmd + Option + I / J / C / U
      if (e.metaKey && e.altKey && ["i", "j", "c", "u"].includes(lower)) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    },
    true
  );

  // Soft DevTools detection — blur content if tools look open
  const threshold = 160;
  setInterval(function () {
    const widthGap = window.outerWidth - window.innerWidth > threshold;
    const heightGap = window.outerHeight - window.innerHeight > threshold;
    if (widthGap || heightGap) {
      document.body.style.filter = "blur(8px)";
      document.body.style.pointerEvents = "none";
    } else {
      document.body.style.filter = "";
      document.body.style.pointerEvents = "";
    }
  }, 800);
})();
