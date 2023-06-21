const navBtns = document.getElementsByClassName("nav-button");
const pageDivs = document.getElementsByClassName("page");

const displayPage = (event) => {
    const target = event.target;
    
    for (let i = 0; i < navBtns.length; i++) {
        const navBtn = navBtns[i];
        navBtn.setAttribute('class', 'nav-button');
    }
    target.setAttribute('class', 'nav-button active');

    const navId = target.getAttribute("data-id");
    const displayPage = document.getElementById(`page-${navId}`);

    for (let i = 0; i < pageDivs.length; i++) {
        const page = pageDivs[i];
        page.style.display = "none";
    }

    displayPage.style.display = "block";
}

for (let i = 0; i < navBtns.length; i++) {
    const navBtn = navBtns[i];
    navBtn.addEventListener("click", displayPage);
}