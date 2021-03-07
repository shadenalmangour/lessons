

// A submit event to add-list-item form that adds user input to list
$("#add-list-item").on("submit", function(event){
    // prevent the form from refreshing page
    event.preventDefault();
    // select input field
    // get value that user entered
    const userInput = $("#new-list-item").val();
    // add the user input as an li to the list
    $("ul").append("<li>" + userInput + "</li>");
})


// CHANGE THIS TO USE EVENT DELEGATION
$("li").on("click", function(event){
    $(event.target).css("color", "red")
})
