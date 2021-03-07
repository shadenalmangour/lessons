// Initial Value for count

// EVENTS
// Here, we attach certain function to certain events
// Below, we elaborate on what each function does

// When the #new form is submitted, add the new item

// When an item gets clicked, mark as complete or incomplete

// When a remove link is clicked, remove that item

// When an edit link is clicked, go into edit mode

// When an item editor is submitted, save the changes

// When a user leaves an item editor form, save the changes

// When the Clear List button is clicked, clear out the items 

// When the Clear Completed button is clicked, clear out the completed items


// FUNCTIONS
// See above for when these are used
const updateCount = function () {
	// Log the current count
	// Count the number of items
	// Print the new count

}

const addNewItem = function (event) {
	// Prevent page reload
	// Get the text the user entered	
	// Add an <li> with that text to the <ul>	
	// Update the count
}

const removeItem = function (event) {
	// Prevent page reload
	// The parent is the item; remove it
	// The list has been changed, so update the count
}

const editItem = function (event) {

	// Prevent page reload
	// Get the text of the to-do item; it's a sibling of the clicked link
	// Get the parent <li>
	// Replace the parent <li> contents with an edit form
	// Focus the keyboard on the input that was just added
}

const saveItem = function (event) {
	// Prevent page reload
	// Get the new text from the editor
	// Get the parent <li>
	// Replace the parent <li> contents with the updated item and controls
}

const switchStatus = function () {
	// Get the parent <li>
	// Toggle the class of the parent <li>
	// The list has been changed, so update the count
}

const clearList = function () {
	// Find all the items and remove them
	// The list has been changed, so update the count
}

const clearCompleted = function () {
	// Find all the items that are done, and remove them
	// The list has been changed, so update the count
}