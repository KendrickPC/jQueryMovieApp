# Part Two - Movies App!

### Build an application that uses jQuery to do the following:

1. Contains a form with two inputs for a title and rating along with a button to submit the form.

2. When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.

[jQuery on click not working:](https://stackoverflow.com/questions/16022744/jquery-on-click-not-working)

3. When the button to remove is clicked, remove each title and rating from the DOM.
```js
$(document).on("click", ".removeBtn", function(evt) {
  evt.target.parentElement.remove();
})
```


#### Further Study
4. Ensure that the rating of a movie can only be between 0 and 10. COMPLETED.
5. Ensure that a title has at least 2 characters in it. COMPLETED.
6. Allow users to sort alphabetically by the title of the movie or by the rating of the movie from lowest to highest and vice versa.

