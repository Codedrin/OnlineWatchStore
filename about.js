/* Demo purposes only */
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );


  $(':radio').change(function() {
    console.log('New star rating: ' + this.value);
  });


  $(document).ready(function(){
    $('.menu').click(function(){
        $('ul').toggleClass('active');
    })
  });


  