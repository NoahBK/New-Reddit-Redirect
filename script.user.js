// ==UserScript==
// @name         New Reddit Redirect
// @version      1.2
// @description  Redirects you to new.reddit.com
// @author       edit by https://github.com/NoahBK
// @homepage     https://github.com/NoahBK
// @supportURL   https://github.com/NoahBK/New-Reddit-Redirect/issues
// @downloadURL  https://github.com/NoahBK/New-Reddit-Redirect/raw/master/script.user.js
// @updateURL    https://github.com/NoahBK/New-Reddit-Redirect/raw/master/script.user.js
// @match        *://*.reddit.com/*
// @exclude      /^https?://[a-z]{2}\.reddit\.com/*
// @exclude      *out.reddit.com/*
// @exclude      *mod.reddit.com/*
// @exclude      *old.reddit.com/*
// @exclude      *chat.reddit.com/*
// @exclude      *://*.reddit.com/gallery/*
// @exclude      *://*.reddit.com/media*
// @exclude      *://*.reddit.com/mod/*/insights
// @run-at       document-start
// @grant        none
// ==/UserScript==

'use strict';

const currentHostname = window.location.hostname;
const targetHostname = "new.reddit.com";

// Redirect to new Reddit if not already there and if the URL is not excluded
if (!currentHostname.includes("new.reddit.com") && !window.location.href.includes("/achievements")) {
    window.location.hostname = targetHostname;
}
