function navToggle() {
	document.getElementById("headerUl").classList.toggle("_active");
	document.getElementById("html").classList.toggle("_overflow");
}


document.addEventListener("DOMContentLoaded", function () {
    function navToggle() {
        var headerNav = document.getElementById('headerNav');
        headerNav.classList.toggle('is-active');
    }

    function closeMenu() {
        var headerNav = document.getElementById('headerNav');
        headerNav.classList.remove('is-active');
    }

    var menuLinks = document.querySelectorAll('.header__a');

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            closeMenu();
        });
    });
});