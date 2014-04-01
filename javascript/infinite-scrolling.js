$(window).scroll(function() {
    if($(window).scrollTop() + document.body.clientHeight == $(document).height()) {
        $('div#ajaxloader').show();
        setTimeout(function (){
          $.ajax({
            url: "loadmore.html",
            success: function(result) {
                if(result) {
                  $("#postwrapper").append(result);
                  $('div#ajaxloader').hide();
                } else {
                  $('div#ajaxloader').html('<center>No more posts to show.</center>');
                }
              }     
          });
        }, 2000);
        
    }
});
