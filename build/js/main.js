const initApp = () => {
    const hamburgerBtn = document.getElementById("ham-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const mainPage = document.querySelector("main");
    
    const mainNavItems = document.querySelectorAll("#main-nav li");
    const mobileNavItems = document.querySelectorAll("#mobile-nav li");

    hamburgerBtn.addEventListener("click", () => {
        // hamburgerBtn.classList.toggle("hidden");
        hamburgerBtn.classList.toggle("open");
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("flex");
        mainPage.classList.toggle("hidden");
    });

    // Function to handle adding/removing the 'active' class in both navs
    function setActiveClass(clickedLi) {
        mainPage.classList.remove("hidden");
        mainNavItems.forEach(item => item.classList.remove("active"));
        mobileNavItems.forEach(item => item.classList.remove("active"));

        // Add active class to the clicked item in both navs
        clickedLi.classList.add("active");

        // Ensure the same item in the mobile nav gets the active class
        const matchingMobileItem = Array.from(mobileNavItems).find(item => item.textContent.trim() === clickedLi.textContent.trim());
        if (matchingMobileItem) {
            matchingMobileItem.classList.add("active");
        }

        // Find the matching item in the desktop nav
        const matchingDesktopItem = Array.from(mainNavItems).find(item => item.textContent.trim() === clickedLi.textContent.trim());
        if (matchingDesktopItem) {
            matchingDesktopItem.classList.add("active");
        }
    }

    // Add event listeners to both the main and mobile nav items
    mobileNavItems.forEach(li => {
        li.addEventListener("click", () => {
            setActiveClass(li);
            mobileMenu.classList.toggle("hidden");
            mobileMenu.classList.toggle("flex");
            hamburgerBtn.classList.toggle("open");
        });
    });

    mainNavItems.forEach(li => {
        li.addEventListener("click", () => setActiveClass(li));
    });

    const btnDarkMode = document.querySelector("#darkmode");
    const btnContact = document.querySelector("#btn-contact");
    const input = document.querySelectorAll("input");
    const textarea = document.querySelector("textarea");
    const secondText = document.querySelector("#second-text");

    secondText.addEventListener("click", () => { 
        console.log("clicked");
    });

    btnDarkMode.addEventListener("click", () => {
        if (btnDarkMode.innerHTML === '<i class="fas fa-moon"></i>') {
            btnDarkMode.innerHTML = '<i class="fas fa-sun text-orange-500 bg-white"></i>';
            btnDarkMode.style.borderColor = "orange";
            btnDarkMode.style.backgroundColor = "white";
            btnContact.style.backgroundColor = "white";
            input.forEach(input => {
                input.style.borderColor = "black";
                input.style.color = "black";
            });
            textarea.style.borderColor = "black";
            textarea.style.color = "black";
            secondText.classList.toggle("before:bg-black");
            secondText.classList.toggle("before:bg-white");
            document.body.classList.remove("darkmode");
        }
        else {
            btnDarkMode.innerHTML = `<i class='fas fa-moon'></i>`;
            btnDarkMode.style.borderColor = "rgb(158 158 158)";
            btnContact.style.backgroundColor = "black";
            input.forEach(input => {
                input.style.borderColor = "white";
                input.style.color = "white";
            });
            textarea.style.borderColor = "white";
            textarea.style.color = "white";
            secondText.classList.toggle("before:bg-black");
            secondText.classList.toggle("before:bg-white");
            document.body.classList.add("darkmode");
        }
    });

    const text = document.querySelector("#second-text");

    const textLoad = () => {
        setTimeout(() => {
            text.textContent = "a Web Designer";
        }, 0);
        setTimeout(() => {
            text.textContent = "a Web Developer";
        }, 4000);
        setTimeout(() => {
            text.textContent = "UI Designer";
        }, 8000);
    }

    textLoad();

    setInterval(textLoad, 12000);
}

document.addEventListener("DOMContentLoaded", initApp);