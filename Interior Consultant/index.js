let menuButton = document.getElementById("menuButton"),
    mobileMenu = document.getElementById("mobileMenu");

menuButton.onclick = function()
{
    mobileMenu.classList.toggle("show");
};