$(document).ready(function(){
    $("aside").append("<h2>Table of contents</h2>");
    $("article h2").wrapInner("<a></a>");
    $("article a").each(function(index){
        var id="heading"+(index+1);
        $(this).attr("id",id);
        }); 
    $("article a").clone().insertAfter($("aside h2"));
    $("aside a").removeAttr("id");
    $("aside a").attr("href", function(index){
        var href="#heading"+(index+1);
        return href;
    });
    $("h1").wrapInner("<a id='top'></a>");
    $("article h2").before(
        "<a href='#top'>Back to top</a>");
    $("article a:first").remove();
    $("article p:last").after(
        "<a href='#top'>Back to Top</a>");
})