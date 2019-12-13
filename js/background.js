chrome.contextMenus.create({
    title: '复制',
    contexts: ['selection'],
    onclick: function(params) {
        var tempInput = document.createElement("input");
        tempInput.value = params.selectionText;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    }
});