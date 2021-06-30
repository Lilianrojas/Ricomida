//cambio de color tipografias//

  $('h3').on('dblclick', function(){
    $(this).css("color", "#FF0000")
  })



  //AQUÍ VAN LAS RECETAS RELACIONADAS//
  $(document).ready(function(){
    $("#show-hide1").click(function(){
      $(".related-recipe").toggle();
    });
    $("#show-hide2").click(function(){
      $(".related-recipe").toggle();
    });
    $("#show-hide3").click(function(){
      $(".related-recipe").toggle();
    });
  });




  $('h3').on('dblclick',function(){
    $(this).css({'color' : '#FF0000'})
  })



 


   $('#enviarCorreo').click(function(){
    alert('El correo fue enviado correctamente...')
   })
    
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })