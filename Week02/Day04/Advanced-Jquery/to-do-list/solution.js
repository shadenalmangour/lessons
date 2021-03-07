let count = 0;


// Functions
const updateCount = function () {

    // Log the current count
    console.log(count);

    // Count the number of items
    count = $('#todos li').not('.done').length;
    console.log(count);

    // Print the new count
    $('#count').html(count);

}
const addNewItem = function (event) {

    // Prevent page reload
    event.preventDefault();

    // Get the text the user entered
    const newItem = $('#newItem').val();

    // Add an <li> with that text to the <ul>
    $('#todos').append('<li><span class="item">' + newItem + '</span><a class="edit">Edit</a><a class="remove">Remove</a></li>');

    // Update the count
    updateCount();
    $("#newItem").val("")

}
const removeItem = function (event) {

    // Prevent page reload
    event.preventDefault();

    // The parent is the item; remove it
    $(event.target).parent().remove();

    // The list has been changed, so update the count
    updateCount();

}
$('#todos').on('click', '.remove', removeItem);
const editItem = function (event) {

    // Prevent page reload
    event.preventDefault();

    // Get the text of the to-do item; it's a sibling of the clicked link
    const itemText = $(event.target).siblings('.item').html();

    // Get the parent <li>
    const listItem = $(event.target).parent();

    // Replace the parent <li> contents with an edit form
    listItem.html('<form class="editor"><input value="' + itemText + '"></form>');

    // Focus the keyboard on the input that was just added
    listItem.find('input').focus();

}
const saveItem = function (event) {

    // Prevent page reload
    event.preventDefault();

    // Get the new text from the editor
    const itemText = $(event.target).children('input').val();

    // Get the parent <li>
    const listItem = $(event.target).parent();

    // Replace the parent <li> contents with the updated item and controls
    listItem.html('<span class="item">' + itemText + '</span><a class="edit">Edit</a><a class="remove">Remove</a>');

}
const switchStatus = function () {

    console.log('switchStatus function is running!');

    // Get the parent <li>
    const listItem = $(event.target).parent();

    // Toggle the class of the parent <li>
    listItem.toggleClass('done');

    // The list has been changed, so update the count
    updateCount();

}
const clearList = function () {

    // Find all the items and remove them
    $('#todos li').remove();

    // The list has been changed, so update the count
    updateCount();

}

const clearCompleted = function () {

    // Find all the items that are done, and remove them
    $('#todos li.done').remove();

    // The list has been changed, so update the count
    updateCount();

}

// Attachments
// Here, we attach certain function to certain events
// Below, we elaborate on what each function does

// When the #new form is submitted, add the new item
$('#new').on('submit', addNewItem);

// When an item gets clicked, mark as complete or incomplete
$('#todos').on('click', '.item', switchStatus);

// When a remove link is clicked, remove that item
$('#todos').on('click', '.remove', removeItem);

// When an edit link is clicked, go into edit mode
$('#todos').on('click', '.edit', editItem);

// When an item editor is submitted, save the changes
$('#todos').on('submit', '.editor', saveItem);

// When a user leaves an item editor form, save the changes
$('#todos').on('blur', '.editor', saveItem);

// When the Clear List button is clicked, clear out the items 
$('#clear').on('click', clearList);

// When the Clear Completed button is clicked, clear out the completed items
$('#clearCompleted').on('click', clearCompleted);