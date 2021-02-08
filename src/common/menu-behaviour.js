export function menuBehaviour() {
    (function () {
        "use strict";
        window.addEventListener("load", (event) => {
            var body = document.body;
            body.classList.add("loaded");
            menu();
            setMenuToggle();
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
        }
    })();
}