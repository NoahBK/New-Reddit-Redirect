// ==UserScript==
// @name New Reddit Redirect
// @version 1.1
// @description Redirects you to new.reddit.com
// @author github.com/xPuls3
// @homepage https://github.com/xPuls3/New-Reddit-Redirect
// @supportURL https://github.com/xPuls3/New-Reddit-Redirect/issues
// @downloadURL https://github.com/xPuls3/New-Reddit-Redirect/raw/master/script.user.js
// @updateURL https://github.com/xPuls3/New-Reddit-Redirect/raw/master/script.user.js
// @match *://*.reddit.com/*
// @exclude /^https?://[a-z]{2}\.reddit\.com/*
// @exclude *out.reddit.com/*
// @exclude *mod.reddit.com/*
// @exclude *old.reddit.com/*
// @exclude *chat.reddit.com/*
// @exclude *://*.reddit.com/gallery/*
// @exclude *://*.reddit.com/media*
// @exclude *://*.reddit.com/mod/*/insights
// @run-at document-start
// @grant none
// ==/UserScript==

// This script was created by Puls3!
// - https://github.com/xPuls3
// - https://gitlab.com/Puls3

'use strict';

const currentHostname = window.location.hostname;
const targetHostname = "new.reddit.com";

if (!currentHostname.includes("new.reddit.com")) {
    window.location.hostname = targetHostname;
}