window.addEventListener("load",initAll,false);

var showingMoreSection = false;
var showingMobileMenu = false;


function initAll(e){

    if(window.innerWidth <= 1024)
        AdjustMenuForMobile();

    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    mediaQuery.addEventListener("change",AdjustMenuForMobile,false);

    var moreButton = document.getElementById("moreButton");

    var menuButton = document.getElementById("menu-button");
    if(moreButton)
        moreButton.addEventListener("click",MoreSection,false);

    if(menuButton)
        menuButton.addEventListener("click",MobileMenu,false);

    e.preventDefault();
}

function AdjustMenuForMobile(){
    if(window.innerWidth <= 1024){
    var mainHeader = document.getElementsByClassName("header")[0];
    var mobileHeaderDiv =  null;
    if(mainHeader){
        var mainMenu = document.getElementsByClassName("mainmenu")[0];
        if(mainMenu){
            mobileHeaderDiv = document.getElementsByClassName("content-mobile-header")[0];
            mainHeader.removeChild(mainMenu);
            mobileHeaderDiv.appendChild(mainMenu);
        }
    }

    var bodyTag = document.getElementsByTagName("body")[0];
    var moreItems = document.getElementsByClassName("more-items")[0];
    if(moreItems){
        if(mobileHeaderDiv){
            if(bodyTag){
                bodyTag.removeChild(moreItems);
                mobileHeaderDiv.append(moreItems);
                moreItems.classList.add("hidden");
            }
        }
    }
}else{
    var mainHeader = document.getElementsByClassName("header")[0];
    var mobileHeaderDiv =  null;
    if(mainHeader){
        var mainMenu = document.getElementsByClassName("mainmenu")[0];
        if(mainMenu){
            mobileHeaderDiv = document.getElementsByClassName("content-mobile-header")[0];
            mobileHeaderDiv.removeChild(mainMenu);
            mainHeader.appendChild(mainMenu);
        }
    }

    var bodyTag = document.getElementsByTagName("body")[0];
    var moreItems = document.getElementsByClassName("more-items")[0];
    if(moreItems){
        if(mobileHeaderDiv){
            if(bodyTag){
                mobileHeaderDiv.removeChild(moreItems);
                bodyTag.appendChild(moreItems);
            }
        }
    }
}
}

function MobileMenu(){
    if(showingMobileMenu)
    {
        this.style.color = "Black";
        HideMobileMenu();
    }else{
        this.style.color = "White";
        ShowMobileMenu();
}
}


function HideMobileMenu(){
    showingMobileMenu = false;
    document.getElementsByClassName("header1-maximized-mobile-bg")[0].classList.add("hidden");
    document.getElementsByClassName("content-mobile-header")[0].classList.add("hidden");
}

function ShowMobileMenu(){
    showingMobileMenu = true;
    document.getElementsByClassName("header1-maximized-mobile-bg")[0].classList.remove("hidden");
    document.getElementsByClassName("more-items")[0].classList.remove("hidden");
    document.getElementsByClassName("content-mobile-header")[0].classList.remove("hidden");
}

function MoreSection(){
    if(showingMoreSection)
        HideMoreSection();
    else
        ShowMoreSection();
}

function HideMoreSection(){
    showingMoreSection = false;
    document.getElementById('more').innerHTML = "More+";
    document.getElementsByClassName("more-items")[0].classList.add("hidden");
}

function ShowMoreSection(){
    showingMoreSection = true;
    document.getElementById('more').innerHTML = "More-";
    document.getElementsByClassName("more-items")[0].classList.remove("hidden");
}