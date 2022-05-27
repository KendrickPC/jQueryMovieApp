$(".submit").on("click", function() {
  const movieTitle = $(".movie-title").val()
  const movieRating = $(".movie-rating").val()
  $(".movieList").append(`<li>${movieTitle} ${movieRating} <button class="removeBtn">Remove</button></li>`)
  // setting input form values to blank again after submission:
  // $("button").addClass("removeBtn");
  $(".movie-title").val('');
  $(".movie-rating").val('');
})


$(document).on("click", ".removeBtn", function(evt) {
  evt.target.parentElement.remove();
  
})

