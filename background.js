chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: ["doge_blocker"],
        addRules: [{
            id: "doge_blocker",
            priority: 1,
            action: {
                type: "block"
            },
            condition: {
                urlFilter: "*://twitter.com/*",
                resourceTypes: ["main_frame", "sub_frame"],
                domains: ["twitter.com"],
                contains: ["doge"]
            }
        }]
    });
});
