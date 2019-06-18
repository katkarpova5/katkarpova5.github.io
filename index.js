function hamburgerClick() {
    var mobileNenu = document.getElementsByClassName("mobile-menu")[0];
    var display = mobileNenu.style.display;
    if (display == "") {
        mobileNenu.style.display = "flex";
    } else {
        mobileNenu.style.display = "";
    }
}

function moreClick() {
    event.preventDefault();

    var itemWindow = document.getElementsByClassName("item-window")[0];
    var display = itemWindow.style.display;
    if (display == "") {
        itemWindow.style.display = "flex";
    } else {
        itemWindow.style.display = "";
    }
}

var hamburgerIcon = document.getElementsByClassName("menu-icon")[0];
hamburgerIcon.addEventListener("click", hamburgerClick);

var moreIcon = document.getElementsByClassName("card-button")[1];
moreIcon.addEventListener("click", moreClick);

var closeIcon = document.getElementsByClassName("item-close")[0];
closeIcon.addEventListener("click", moreClick);