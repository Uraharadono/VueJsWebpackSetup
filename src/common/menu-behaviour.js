export function menuBehaviour() {
    (function () {
        "use strict";
        window.addEventListener("load", (event) => {
            var body = document.body;
            body.classList.add("loaded");
            menu();
            setMenuToggle();
            setSearchListener();
            removeMenuPaddingWhenMenuNotShown();
        });

        function setMenuToggle() {
            var overlay = document.getElementById("side-bar-overlay");
            var toggleBtn = document.getElementById("toggle-menu");
            var menu = document.getElementById("side-bar");
            var layout = document.getElementsByClassName("layout")[0];
            var closeBtn = document.getElementById("close-btn");

            if (!(menu && layout)) {
                return;
            }

            var toggleMenu = function () {
                menu.classList.toggle("opened");
                layout.classList.toggle("side-bar-opened");
            };

            if (overlay) {
                overlay.addEventListener("click", toggleMenu);
            }

            if (toggleBtn) {
                toggleBtn.addEventListener("click", toggleMenu);
            }

            if (closeBtn) {
                closeBtn.addEventListener("click", toggleMenu);
            }
        }

        function menu() {
            try {
                var elements = document
                    .getElementsByClassName("app-menu")[0]
                    .getElementsByClassName("menu-item has-sub");
                var menuDelegate = function () {
                    // This will allow only single list item to be open
                    // for (var i = 0; i < elements.length; i++) {
                    // 	elements[i].classList.remove("active");
                    // 	var sub = elements[i].getElementsByClassName("sub")[0];
                    // 	sub.style.maxHeight = null;
                    // }

                    if (this.classList.contains("active")) {
                        this.classList.remove("active");
                        var sub = this.getElementsByClassName("sub")[0];
                        sub.style.maxHeight = null;
                    } else {
                        this.classList.add("active");
                        var sub = this.getElementsByClassName("sub")[0];
                        sub.style.maxHeight = sub.scrollHeight + "px";
                    }
                };

                for (var i = 0; i < elements.length; i++) {
                    elements[i].addEventListener("click", menuDelegate, false);
                }
            } catch (error) {
                // Sometimes elements cannot be found, so just let it fall trough                
            }
        }

        function setSearchListener() {
            var pageTitle = document.getElementById("page-title");
            var searchBtn = document.getElementById("toggle-search");
            var pageSearch = document.getElementById("page-search");

            if (searchBtn) {
                searchBtn.addEventListener("click", function () {
                    searchBtn.classList.toggle("active");
                    pageSearch.classList.toggle("show");
                    pageTitle.classList.toggle("hide");
                });
            }
        }

        function removeMenuPaddingWhenMenuNotShown() {
            var elements = document.getElementsByClassName("app-menu");

            // if there are no elements, that means we have to remove 
            if (elements.length > 0) {
                // DO NOTHING
                // IT's Not login or registration or somwhere where menu is not SHOWN
            }
            else {
                document.getElementsByClassName("nav-bar")[0].style.paddingLeft = "0rem";
                document.getElementsByClassName("main")[0].style.paddingLeft = "0rem";
                document.getElementsByClassName("content-container")[0].style.margin = "0";
                document.getElementsByClassName("content-container")[0].style.padding = "0";
            }
        }

    })();
}