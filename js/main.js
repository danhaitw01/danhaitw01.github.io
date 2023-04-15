document.write('<script src="./js/jquery-3.6.1.js"></script>');
document.write('<script src="./js/LocaleSwitch.js"></script>');
//第一版寫法

function English_Locale_V1(){
	document.title="Rumami's Profile Page";
	for (var i=0;i<8;i++){
		Locale_Switch_V1(i,'en');
	}
}

function Chinese_Locale_V1(){
	document.title="琉見的個人頁面";
	for (var i=0;i<8;i++){
		Locale_Switch_V1(i,'zh-tw');
	}
}

function Japanese_Locale_V1(){
	document.title="ルマミの紹介ページ";
	for (var i=0;i<8;i++){
		Locale_Switch_V1(i,'ja');
	}
}



//第二版寫法

function Chinese_Locale_V2(){
	document.title="琉見的個人頁面";
	Locale_Switch_V2("zh-tw")
}

function English_Locale_V2(){
	document.title="Rumami's Profile Page";
	Locale_Switch_V2("en")
}

function Japanese_Locale_V2(){
	document.title="ルマミの紹介ページ";
	Locale_Switch_V2("ja")
}