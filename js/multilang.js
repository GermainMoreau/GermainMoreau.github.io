function setLanguage(Lang) {

    switch (Lang) {
        case 'FR':
            changeDisplayOfALanguage('EN', 'none');
            changeDisplayOfALanguage('IT', 'none');
            changeDisplayOfALanguage('FR', 'block');
            break;
        case 'IT':
            changeDisplayOfALanguage('EN', 'none');
            changeDisplayOfALanguage('IT', 'block');
            changeDisplayOfALanguage('FR', 'none');
            break
        default:
            changeDisplayOfALanguage('EN', 'block');
            changeDisplayOfALanguage('IT', 'none');
            changeDisplayOfALanguage('FR', 'none');

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

