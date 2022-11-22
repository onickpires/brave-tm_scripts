// ==UserScript==
// @name         Brave Fixes
// @namespace    http://test.com/
// @version      0.1
// @description  try to take over the world!
// @author       Z
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pornbimbo.com/
// @grant        none
// @run-at       document-end
// @match        http://pornbimbo.com/*
// @match        https://www.pornbimbo.com/*
// @match        http://pornbimbo.com/
// ==/UserScript==

(function() {
    'use strict';
    Array.from(document.getElementsByClassName('lazy-load')).forEach(el => (el.src = el.getAttribute('data-original')))

    document.querySelectorAll('[data-parameters]').forEach(el => {
        let canonical = document.querySelector('[rel="canonical"]').getAttribute('href');
        let parms = el.getAttribute('data-parameters').replace(/\:/, '=').replace(/\;/, '&');
        let url = `${canonical}?${parms}`;
        el.setAttribute('href', url);
    });
})();
