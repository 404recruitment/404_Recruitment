
function loadWelcomePage(){
    $("#mainContentArea").load("welcome.html");
}

function loadAboutPage(){
    $("#mainContentArea").load("about.html");
}

function loadPage(pageName){
    $("#mainContentArea").load(pageName);
}