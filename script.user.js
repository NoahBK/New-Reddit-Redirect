// ==UserScript==
// @name New Reddit Redirect
// @version      1.0
// @description  redirects you to new.reddit.com
// @author       github.com/xPuls3
// @match *://*.reddit.com/*
// @exclude /^https?://[a-z]{2}\.reddit\.com/*
// @exclude *out.reddit.com/*
// @exclude *://*.reddit.com/gallery/*
// @exclude *://*.reddit.com/media*
// @run-at document-start
// @grant        none
// ==/UserScript==

// Forked from RichKMLS's Old Reddit Redirect script
// - https://github.com/RichKMLS/Old-Reddit-Redirect

'use strict';

const currentUrl = window.location.href;
const newRedditUrl = 'https://new.reddit.com/';

if (!currentUrl.includes("new.reddit.com")) {

    const newUrl = currentUrl.replace(/^https?:\/\/(www\.)?reddit.com\//, newRedditUrl);
    window.location.replace(newUrl);
  
}