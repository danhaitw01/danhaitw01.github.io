document.write('<script src="./js/jquery-3.6.1.js"></script>');
$(document).ready(function () {
  $.fn.jqmultilang = function (l) {
    $(this).html($(this).data("lang-" + l));
  };
});
function English_Locale(){
	$('#LocaleReq0').jqmultilang('en');
	$('#LocaleReq1').jqmultilang('en');
	$('#LocaleReq2').jqmultilang('en');
	$('#LocaleReq3').jqmultilang('en');
	$('#LocaleReq4').jqmultilang('en');
	$('#LocaleReq5').jqmultilang('en');
	$('#LocaleReq6').jqmultilang('en');}
function Chinese_Locale(){
	$('#LocaleReq0').jqmultilang('zh-tw');
	$('#LocaleReq1').jqmultilang('zh-tw');
	$('#LocaleReq2').jqmultilang('zh-tw');
	$('#LocaleReq3').jqmultilang('zh-tw');
	$('#LocaleReq4').jqmultilang('zh-tw');
	$('#LocaleReq5').jqmultilang('zh-tw');
	$('#LocaleReq6').jqmultilang('zh-tw');
}
function Japanese_Locale(){
	$('#LocaleReq0').jqmultilang('ja');
	$('#LocaleReq1').jqmultilang('ja');
	$('#LocaleReq2').jqmultilang('ja');
	$('#LocaleReq3').jqmultilang('ja');
	$('#LocaleReq4').jqmultilang('ja');
	$('#LocaleReq5').jqmultilang('ja');
	$('#LocaleReq6').jqmultilang('ja');
}