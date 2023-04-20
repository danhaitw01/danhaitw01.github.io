//這裡註解掉是因為在main.js中已引入jquery，不用引入第二次，一般測試情況請引入jquery
//document.write('<script src="./js/jquery-3.6.4.slim.min.js"></script>');

//第一版寫法
$(document).ready(
	function () {
		$.fn.jqmultilang = 
		function (l) {
			$(this).html($(this).data("lang-" + l));
		};
	}
);

function Locale_Switch_V1(times,input){
	$('#LocaleReq'+String(times)).jqmultilang(input);
}



//第二版寫法

var Chinese_String=[
"語言切換",
"琉見的個人頁面",
"我的Twitter",
"我的Facebook粉絲專頁",
"我的Twitch頻道",
"我Youtube上的翻譯頻道",
"我Youtube上的娛樂頻道",
"我的bilibili個人空間",
"現在時間:"];

var English_String=[
"Change Language",
"Rumami's Profile Page",
"My Twitter",
"My Facebook Page",
"My Twitch Channel",
"My Translation Youtube Channel",
"My Entertainment Youtube Channel",
"My bilibili Space",
"Current Time:"];

var Japanese_String=[
"言語切り替え",
"ルマミの紹介ページ",
"私のTwitter",
"私のFacebookページ",
"私のTwitchチャンネル",
"私の翻訳Youtubeチャンネル",
"私のエンタメYoutubeチャンネル",
"私のbilibili空間",
"現在の時間:"];

function Locale_Switch_V2(locale){
	for(var i=0;i<Chinese_String.length;i++){
		if(locale=="zh-tw"){
			$('#LocaleReq'+String(i)).text(Chinese_String[i]);
		}
		else if(locale=="en"){
			$('#LocaleReq'+String(i)).text(English_String[i]);
		}
		else if(locale=="ja"){
			$('#LocaleReq'+String(i)).text(Japanese_String[i]);
		}
	}
}



//第三版寫法

async function Locale_Switch_V3(locale){
	var requestURL="./locale/locale_"+locale+".json";
	var request=new XMLHttpRequest();
	request.open("get",requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
		var data=request.response;
		for (var i=0;i<data.content.length;i++){
			if (i===1){
				document.title=data.content[i].text;
			}
			$("#"+data.content[i].id).text(data.content[i].text);
		}
	}
}
