  $(function(){
    populateButtons(transformers,'searchButton', "#buttons-view");
    console.log("page loaded");
  })

    var transformers = ["Megatron", "Optimus Prime", "Bumblebee", "Soundwave"];
  
    function populateButtons(trasnformers,classToAdd,areaToAddTo){
      $(areaToAddTo).empty();
      for(var i=0; i<transformers.length;i++){
        var a = $('<button>');
        a.addClass(classToAdd);
        a.attr('data-type',transformers[i]);
        a.text(transformers[i]);
        $(areaToAddTo).append(a);
      }
    }

    $(document).on('click','.searchButton',function(){
      $('#searches').empty();
      var type =$(this).data('type');
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +type+ "&api_key=32884c9e09414e0aa5ab45d425ad78b3&limit=20";
      $.ajax({url:queryURL,method:'GET'})
            .done(function(response) {
             for(var i=0;i<response.data.length;i++){
                var searchDiv = $('<div class="search-item">');
                var rating = response.data[i].rating;
                var p = $('<p>').text('Rating: '+rating);
                var animated = response.data[i].images.fixed_height.url;
                var still = response.data[i].images.fixed_height_still.url;
                var image = $('<img>');
                image.attr('src',still);
                image.attr('data-still', still);
                image.attr('data-animated', animated);
                image.attr('data-state', 'still');
                image.addClass('searchImage');
                searchDiv.append(p);
                searchDiv.append(image);
                $('#searches').append(searchDiv);


             }
          })
})

$(document).on('click','.searchImage', function(){
  var state = $(this).attr('data-state');
  if(state == 'still'){
    $(this).attr('src',$(this).data('animated'));
    $(this).attr('data-state','animated');
  } else {
    $(this).attr('src',$(this).data('still'));
    $(this).attr('data-state','still');
  }
})



$('#add-tran').on('click',function(){
  var newSearch = $('input').eq(0).val();
  transformers.push(newSearch);
  populateButtons(transformers,'searchButton', "#buttons-view");
  return false;

})


  ////$("#add-tran").on("click", function(event) {
      ////event.preventDefault();
      ////var transformer = $("#tran-input").val().trim();
      ////transformers.push(transformer);
      ////renderButtons();

      ////function renderButtons() {
       //// $("#buttons-view").empty();
       //// for (var i = 0; i < transformers.length; i++) {
       ////  var a = $("<button>");
         //a.addClass("robot");
       ////  a.attr("data-name", transformers[i]);
       ////  a.text(transformers[i]);
       //// $("#buttons-view").append(a);
       //// console.log(transformers);
      //// }
    //// }


      ////  $("button").on("click", function() {
      ////  var p = $(this).attr('data-name');
         
      ////  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + transformers + "&api_key=32884c9e09414e0aa5ab45d425ad78b3";
         
        //  $.ajax({url:queryURL,method:'GET'})
        //    .done(function(response) {
        //     console.log(response);
             
        //     var results = response.data;          

         //    for(var i=0; i<results.length;i++){
             
         //    var transDiv = $("<div>");

          //   var x = $('<p>').text("Rating: " + results[i].rating);
               
          //    var transImage = $("<img>")

           //   transImage.attr("src", results[i].images.fixed_height.url);

            //  transDiv.append(x);
            //  transDiv.append(transImage);

            //  $("#robots-view").prepend(transImage);


     // });

     //});
    
    //});
    // 

