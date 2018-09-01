const modelTabHeaderId = "nav-model-tab";
const modelTabContentId = "nav-model";
const viewTabHeaderId = "nav-view-tab";
const viewTabContentId = "nav-view";

function setVisibility(isVisible, tabHeaderId, tabContentId) {
    var modelTabHeader = document.getElementById(tabHeaderId);
    var modelTabContent = document.getElementById(tabContentId);
    if (!isVisible)
    {
        modelTabHeader.classList.remove("active");
        modelTabContent.classList.remove("show");
        modelTabContent.classList.remove("active");
    }
    else
    {
        modelTabHeader.classList.add("active");
        modelTabContent.classList.add("show");
        modelTabContent.classList.add("active");
    }
}

window.codeViewerExtensions = {
    showView: function () {
        setVisibility(false, modelTabHeaderId, modelTabContentId);
        setVisibility(true, viewTabHeaderId, viewTabContentId);
    },
    showModel: function () {
        setVisibility(false, viewTabHeaderId, viewTabContentId);
        setVisibility(true, modelTabHeaderId, modelTabContentId);
    }
}