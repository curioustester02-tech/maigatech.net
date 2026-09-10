document.addEventListener("DOMContentLoaded", function () {

    const button = document.querySelector(".mobile-menu-toggle");
    const menu = document.querySelector(".mobile-menu-wrapper");

    if (!button || !menu) {
        return;
    }

    button.addEventListener("click", function () {

        const isOpen = menu.classList.toggle("is-open");

        button.classList.toggle("is-open", isOpen);

        button.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        button.setAttribute(
            "aria-label",
            isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    /* Close after selecting a menu item */

    menu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            menu.classList.remove("is-open");
            button.classList.remove("is-open");

            button.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });


    /* Close menu if browser is resized to desktop */

    window.addEventListener("resize", function () {

        if (window.innerWidth > 900) {

            menu.classList.remove("is-open");
            button.classList.remove("is-open");

            button.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});