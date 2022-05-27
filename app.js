$(".submit").on("click", function() {
  const movieTitle = $(".movie-title").val()
  const movieRating = $(".movie-rating").val()
  $("ul").append(`<li>${movieTitle} ${movieRating} <button class="removeBtn">Remove</button></li>`)
  // setting input form values to blank again after submission:
  // $("button").addClass("removeBtn");
  $(".movie-title").val('');
  $(".movie-rating").val('');
})


$(".removeBtn").on("click", function(evt) {
  console.log(evt);
  console.log("CLICK EVENT LISTENER NOT SHOWING UP!")
})

