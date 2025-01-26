const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Event listener for the Add Chapter button
button.addEventListener('click', function () {
  // Ensure input is not empty
  if (input.value.trim() !== '') {
    // Create a new list item (li)
    const li = document.createElement('li');
    
    // Add the input value as the text content of the li
    li.textContent = input.value;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    // Append the delete button to the li
    li.append(deleteButton);

    // Append the li to the parent list (ul)
    list.append(li);

    // Add event listener to the delete button to remove the li element
    deleteButton.addEventListener('click', function () {
      list.removeChild(li); // Remove the li element from the list
      input.focus(); // Refocus the input field
    });

    // Clear the input field and refocus for the next chapter
    input.value = '';
    input.focus();
    } else {
    // If the input is empty, just refocus the input field
    input.focus();
    }
});

