


function buildPage() {
    var container = document.getElementById("container");
    container.appendChild(buildHeader());
    container.appendChild(buildContent());
}


function buildHeader() {
    var header = document.createElement("header");
    header.appendChild(buildLogo());
    header.appendChild(buildNav());
    return header;
}