function setLanguage(Lang) {
	changeDisplayOfALanguage('EN','none');
	changeDisplayOfALanguage('FR','none');
	changeDisplayOfALanguage('IT','none');
	changeDisplayOfALanguage(Lang,'block');
}

function changeDisplayOfALanguage(Lang,kindOfDisplay)
{
	var elems = document.getElementsByClassName(Lang);

	for (var i=0;i<elems.length;i+=1){
  		elems[i].style.display = kindOfDisplay ;
	}
	
}function defaultLanguage()
{
	var userLang = navigator.language || navigator.userLanguage;

	if (userLang.toUpperCase() != 'FR' && userLang.toUpperCase() != 'IT') {
			setLanguage('EN');
	}
	else{
		setLanguage(userLang.toUpperCase());
	}


}

