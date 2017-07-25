   $(document).ready(function() {

    var transformers = ["Megatron", "Optimus Prime", "Bumblebee", "Soundwave", "Grimlock", "Starscream"];
  
  $("#add-tran").on("click", function(event) {
      event.preventDefault();
      var transformer = $("#tran-input").val().trim();
      transformers.push(transformer);
      renderButtons();

      function renderButtons() {
        $("#buttons-view").empty();
        for (var i = 0; i < transformers.length; i++) {
         var a = $("<button>");
         //a.addClass("robot");
         a.attr("data-name", transformers[i]);
         a.text(transformers[i]);
        $("#buttons-view").append(a);
        console.log(transformers);
       }
     }


        $("button").on("click", function() {
        var p = $(this).attr('data-name');
         
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + transformers + "&api_key=32884c9e09414e0aa5ab45d425ad78b3";
         
          $.ajax({url: queryURL, method: "GET"})
            .done(function(response) {
             console.log(response);
             
             var results = response.data;          

             for(var i=0; i<results.length;i++){
             
             var transDiv = $("<div>");

             var x = $('<p>').text("Rating: " + results[i].rating);
               
              var transImage = $("<img>")

              transImage.attr("src", results[i].images.fixed_height.url);

              transDiv.append(x);
              transDiv.append(transImage);

              $("#robots-view").prepend(transImage);

                renderButtons();
              }
          });
      });

     });
    
    });
     

