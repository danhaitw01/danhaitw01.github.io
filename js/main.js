document.write('<script src="./js/jquery-3.6.1.js"></script>');
document.write('<script src="./js/LocaleSwitch.js"></script>');
function English_Locale(){
	document.title="Rumami's Profile Page";
	for (var i=0;i<7;i++){
		$('#LocaleReq'+String(i)).jqmultilang('en');
	}
}
function Chinese_Locale(){
	document.title="琉見的個人頁面";
	for (var i=0;i<7;i++){
		$('#LocaleReq'+String(i)).jqmultilang('zh-tw');
	}
}
function Japanese_Locale(){
	document.title="ルマミの紹介ページ";
	for (var i=0;i<7;i++){
		$('#LocaleReq'+String(i)).jqmultilang('ja');
	}
}