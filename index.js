function hamburgerClick() {
    var mobileNenu = document.getElementsByClassName("mobile-menu")[0];
    var display = mobileNenu.style.display;
    if (display == "") {
        mobileNenu.style.display = "flex";
    } else {
        mobileNenu.style.display = "";
    }
}

function moreClick(card) {
    $(".item-window"+card).fadeIn();
    $(".item-window"+card).css("display", "flex");
}

var hamburgerIcon = document.getElementsByClassName("menu-icon")[0];
hamburgerIcon.addEventListener("click", hamburgerClick);

$('.card-button.one').click(
    function () {
        moreClick(".one")
    }
)

$('.card-button.two').click(
    function () {
        moreClick(".two")
    }
)


$('.item-close').click(
    function() {
        $(".item-window").fadeOut();
    }
)