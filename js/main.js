document.write('<script src="./js/jquery-3.6.4.slim.min.js"></script>');
document.write('<script src="./js/LocaleSwitch.js"></script>');
//語言切換
//第一版寫法

function English_Locale_V1(){
	document.title="Rumami's Profile Page";
	for (var i=0;i<9;i++){
		Locale_Switch_V1(i,'en');
	}
}

function Chinese_Locale_V1(){
	document.title="琉見的個人頁面";
	for (var i=0;i<9;i++){
		Locale_Switch_V1(i,'zh-tw');
	}
}

function Japanese_Locale_V1(){
	document.title="ルマミの紹介ページ";
	for (var i=0;i<9;i++){
		Locale_Switch_V1(i,'ja');
	}
}



//第二版寫法

function Chinese_Locale_V2(){
	document.title="琉見的個人頁面";
	Locale_Switch_V2("zh-tw");
}

function English_Locale_V2(){
	document.title="Rumami's Profile Page";
	Locale_Switch_V2("en");
}

function Japanese_Locale_V2(){
	document.title="ルマミの紹介ページ";
	Locale_Switch_V2("ja");
}



//第三版寫法

function Chinese_Locale_V3(){
	Locale_Switch_V3("zh-tw");
}

function English_Locale_V3(){
	Locale_Switch_V3("en");
}

function Japanese_Locale_V3(){
	Locale_Switch_V3("ja");
}





//實時時間顯示
	
setInterval(function (){
	var t=""
	if (document.title=="Rumami's Profile Page"){
		t="en-US";
	}
	else if (document.title=="琉見的個人頁面"){
		t="zh-TW";
	}
	else if (document.title=="ルマミの紹介ページ"){
		t="ja-JP";
	}
    var time=new Date().toLocaleString(t);
    $("#Time").text(time);
}, 0);