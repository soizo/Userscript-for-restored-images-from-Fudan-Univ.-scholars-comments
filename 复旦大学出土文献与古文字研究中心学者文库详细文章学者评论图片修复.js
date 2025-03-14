// ==UserScript==
// @name         复旦大学出土文献与古文字研究中心学者文库详细文章学者评论图片修复
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Replace image src from gwz.fudan.edu.cn to current hostname
// @author       Grok, SoizoKtantas
// @match        http://www.fdgwz.org.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 獲取當前頁面的協議和主機名
    const currentHost = window.location.protocol + '//' + window.location.hostname;

    // 找到id為"tab"的div
    const tabDiv = document.getElementById('tab');
    
    // 如果找到div就繼續處理
    if (tabDiv) {
        // 獲取div內的所有img元素
        const images = tabDiv.getElementsByTagName('img');
        
        // 遍歷所有img元素
        for (let img of images) {
            // 檢查src是否以指定URL開頭
            if (img.src.startsWith('http://www.gwz.fudan.edu.cn')) {
                // 替換為當前頁面的協議和主機名
                img.src = img.src.replace('http://www.gwz.fudan.edu.cn', currentHost);
            }
        }
    }
})();
