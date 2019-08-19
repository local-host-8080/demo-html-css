$("a b").html(function(index, html) {
  return html.replace(/\S/g, '<span>$&</span>');
});

$("a").click(function(){
        $("a").addClass("loading");     
        setTimeout(function(){
          $("a").removeClass("loading"); 
        }, 8000);

});