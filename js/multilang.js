function setLanguage(Lang) {
    switch (Lang) {
        case 'FR':
            changeDisplayOfALanguage('EN', 'none');
            changeDisplayOfALanguage('IT', 'none');
            changeDisplayOfALanguage('FR', 'block');
            modifyHTMLLang(Lang.toLowerCase());
            break;
        case 'IT':
            changeDisplayOfALanguage('EN', 'none');
            changeDisplayOfALanguage('IT', 'block');
            changeDisplayOfALanguage('FR', 'none');
            modifyHTMLLang(Lang.toLowerCase());
            break
        default:
            changeDisplayOfALanguage('EN', 'block');
            changeDisplayOfALanguage('IT', 'none');
            changeDisplayOfALanguage('FR', 'none');
            modifyHTMLLang('en');

    }
}

function changeDisplayOfALanguage(Lang, kindOfDisplay) {
    var listOfElements = document.getElementsByClassName(Lang);

    for (var i = 0; i < listOfElements.length; i += 1) {
        listOfElements[i].style.display = kindOfDisplay;
    }

}

function defaultLanguage() {
    var userLang = navigator.language || navigator.userLanguage;

    if (userLang.toUpperCase() != 'FR' && userLang.toUpperCase() != 'IT') {
        setLanguage('EN');
    }
    else {
        setLanguage(userLang.toUpperCase());
    }
}

function modifyHTMLLang(myLang){
    document.documentElement.lang=myLang;
}

function hideBeforeLoad() {
    $('body').css('display','none');
}

function showAfterLoad() {
    defaultLanguage();
    $('body').css('display','block'); // this will execute before $(document).ready()
}
