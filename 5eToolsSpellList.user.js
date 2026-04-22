// ==UserScript==
// @name                5etools Clean Spell Layout
// @namespace           https://github.com/ThunderE75
// @author              ThunderE75
// @date                2026-04-22
// @version             1.3
// @description         Makes the spells page of 5e.tools clean, and only show pinned list, with customizable UI.
// @match               *://5e.tools/spells.html*
// @grant               GM_getValue
// @grant               GM_setValue
// @run-at              document-idle
//
// @icon                data:image/webp;base64,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
// @license             GNU Affero General Public License v3.0
// @supportURL          https://github.com/ThunderE75/5eTools-spell-list-userscript/issues
// @homepageURL         https://github.com/ThunderE75/5eTools-spell-list-userscript
// @homepage            https://github.com/ThunderE75/5eTools-spell-list-userscript

// ==/UserScript==
//
// =================================================================================
//     5etools Clean Spell Layout: Makes the spells page of 5e.tools clean, and only show pinned list, with customizable UI.
//     Copyright (C) 2026 ThunderE75
//
//     This program is free software: you can redistribute it and/or modify
//     it under the terms of the GNU Affero General Public License as published
//     by the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.
//
//     This program is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU Affero General Public License for more details.
//
//     You should have received a copy of the GNU Affero General Public License
//     along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
// =================================================================================

(function () {
    'use strict';

    function initConfigDefaults() {
        if (GM_getValue("showHeader") === undefined) GM_setValue("showHeader", true);
        if (GM_getValue("showNav") === undefined) GM_setValue("showNav", true);
        if (GM_getValue("showExtra") === undefined) GM_setValue("showExtra", true);
    }

    initConfigDefaults();

    const CONFIG = {
        showHeader: GM_getValue("showHeader", true),
        showNav: GM_getValue("showNav", true),
        showExtra: GM_getValue("showExtra", true),
    };

    let leftContainer = null;

    const style = document.createElement("style");
    style.textContent = `
        html, body {
            height: 100% !important;
            overflow: hidden !important;
        }

        @media screen and (width <= 991px) {
            .list, .list-display-only {
                max-height: none !important;
                height: 100% !important;
            }
            .sublist--resizable {
                max-height: none !important;
                height: 100% !important;
            }
        }

        .sublist--resizable {
            max-height: unset !important;
        }
    `;
    document.head.appendChild(style);

    function buildLayout(extra, sublist, content, header, nav) {
        document.body.innerHTML = "";

        const top = document.createElement("div");
        top.style.flex = "0 0 auto";
        top.style.borderBottom = "1px solid #333";

        if (CONFIG.showHeader && header) top.appendChild(header);
        if (CONFIG.showNav && nav) top.appendChild(nav);

        const wrapper = document.createElement("div");
        wrapper.style.display = "flex";
        wrapper.style.width = "100vw";
        wrapper.style.flex = "1 1 auto";
        wrapper.style.minHeight = "0";

        leftContainer = document.createElement("div");
        leftContainer.style.flex = "0 0 35%";
        leftContainer.style.display = "flex";
        leftContainer.style.flexDirection = "column";
        leftContainer.style.height = "100%";
        leftContainer.style.minHeight = "0";

        if (CONFIG.showExtra && extra) {
            extra.style.flex = "0 0 auto";
            leftContainer.appendChild(extra);
        }

        sublist.style.flex = "1 1 0";
        sublist.style.minHeight = "0";
        sublist.style.overflowY = "auto";
        leftContainer.appendChild(sublist);

        const right = document.createElement("div");
        right.style.flex = "0 0 65%";
        right.style.height = "100%";
        right.style.minHeight = "0";
        right.style.overflowY = "auto";
        right.style.padding = "20px";
        right.appendChild(content);

        wrapper.appendChild(leftContainer);
        wrapper.appendChild(right);

        const root = document.createElement("div");
        root.style.display = "flex";
        root.style.flexDirection = "column";
        root.style.height = "100vh";
        root.style.overflow = "hidden";

        if (CONFIG.showHeader || CONFIG.showNav) {
            root.appendChild(top);
        }

        root.appendChild(wrapper);

        document.body.appendChild(root);
        document.body.style.margin = "0";
    }

    function moveExtraIfNeeded() {
        const extra = document.querySelector("#contentwrapper > div.ve-pt-2.ve-flex-col.no-print");
        if (CONFIG.showExtra && extra && leftContainer && !leftContainer.contains(extra)) {
            leftContainer.prepend(extra);
        }
    }

    function init() {
        const sublist = document.getElementById("sublistcontainer");
        const content = document.getElementById("wrp-pagecontent");
        const extra = document.querySelector("#contentwrapper > div.ve-pt-2.ve-flex-col.no-print");
        const header = document.querySelector("body > div.viewport-wrapper > header");
        const nav = document.getElementById("navigation");

        if (!sublist || !content) return;

        buildLayout(extra, sublist, content, header, nav);

        const observer = new MutationObserver(() => {
            moveExtraIfNeeded();
        });

        observer.observe(document.body, { childList: true, subtree: true });
    }

    const interval = setInterval(() => {
        const sublist = document.getElementById("sublistcontainer");
        const content = document.getElementById("wrp-pagecontent");

        if (sublist && content) {
            clearInterval(interval);
            init();
        }
    }, 500);

    setTimeout(() => clearInterval(interval), 8000);
})();