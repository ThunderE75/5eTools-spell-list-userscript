// ==UserScript==
// @name         5etools Minimal Split (Sublist + Content)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Show only sublist (left) and page content (right)
// @match        *://5e.tools/spells.html*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    function applyLayout() {
        const sublist = document.getElementById("sublistcontainer");
        const content = document.getElementById("wrp-pagecontent");

        if (!sublist || !content) return;

        // 🔥 Remove EVERYTHING else
        document.body.innerHTML = "";

        // Create new layout container
        const wrapper = document.createElement("div");
        wrapper.style.display = "flex";
        wrapper.style.width = "100vw";
        wrapper.style.height = "100vh";

        // LEFT: sublist
        sublist.style.flex = "0 0 35%";
        sublist.style.maxWidth = "35%";

        /* 🔥 FIX */
        sublist.style.height = "100vh";
        sublist.style.minHeight = "100vh";
        sublist.style.overflowY = "auto";
        sublist.style.position = "relative";

        // RIGHT: page content
        const right = document.createElement("div");
        right.style.flex = "0 0 65%";
        right.style.height = "100%";
        right.style.overflowY = "auto";
        right.style.padding = "20px";

        right.appendChild(content);

        // Add to wrapper
        wrapper.appendChild(sublist);
        wrapper.appendChild(right);

        // Add back to body
        document.body.appendChild(wrapper);

        document.body.style.margin = "0";
    }

    // Wait for page to fully load (important for 5etools)
    const interval = setInterval(() => {
        const sublist = document.getElementById("sublistcontainer");
        const content = document.getElementById("wrp-pagecontent");

        if (sublist && content) {
            clearInterval(interval);
            applyLayout();
        }
    }, 500);

    setTimeout(() => clearInterval(interval), 8000);
})();