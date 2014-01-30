///////////////////////////////////////////////////////////
// (c)2013 unimal Co.,Ltd. all right reserved.
// サンプル
// author nt-uni 2014/01/29
///////////////////////////////////////////////////////////
 

$(document).on('dblclick','.userContent',function(){
	$(this).find('.text_exposed_hide').remove();
	var md = $(this).find('.text_exposed_root').html();
	md = md.replace(/<span class=\"text_exposed_show\">/g,'');
	md = md.replace(/<\/span>/g,'');
	md = md.replace(/<br>/g,'\n');
	//md = md.replace(/\"/g,'');
	$(this).addClass('userContent2');
	$(this).html(marked(md));
});