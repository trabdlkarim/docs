// Custom JS
// Simple JavaScript for setting footer anchors target attritube

var footerAnchors = document.getElementsByTagName("FOOTER")[0].getElementsByTagName("A"); 

footerAnchors.forEach(setAnchorTarget);

function setAnchorTarget(anchor,index,array){
    anchor.setAttribute("target","_blank");
}
