function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("postComplaint").style.backgroundColor = "rgba(0,0,0,0.4)"; document.getElementById("complaint").style.marginLeft = "100px";
}
function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("postComplaint").style.backgroundColor = "white";
     document.getElementById("complaint").style.marginLeft = "0px";
}