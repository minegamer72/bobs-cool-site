const enabled = false

$(document).ready(function() { // ONLY when the page is done loading.
    // so i can use nvim live view without ddosing TheCatAPI. enabled should be set to true
    // when pushed to neocities.
    if (enabled == false) {
        return;
    }
    // make a request to thecatapi.com to get a single cat image
    $.get('https://api.thecatapi.com/v1/images/search?limit=1', function(data) { 
        // then make a new element inside of div cat-images and set an img src to index 0 dot urll
         $('#cat-images').append('<img src="' + data[0].url + '" class="cat">'); 
     });
});
