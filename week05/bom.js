const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
}); 

// Event listener for the Add Chapter button
function displayList(item) {
  // Ensure input is not empty
  if (input.value.trim() !== '') {
    // Create a new list item (li)
    const li = document.createElement('li');
    
    // Add the input value as the text content of the li
    li.textContent = item;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    // Append the delete button to the li
    li.append(deleteButton);

    // Append the li to the parent list (ul)
    list.append(li);

    // Add event listener to the delete button to remove the li element
    deleteButton.addEventListener('click', function () {
      list.removeChild(li); // Remove the li element from the list
      deleteChapter(li.textContent);
      input.focus(); // Refocus the input field
    });

    console.log('I dont like to copy code');

    // Clear the input field and refocus for the next chapter
    input.value = '';
    input.focus();
    } else {
    // If the input is empty, just refocus the input field
    input.focus();
    }
};

button.addEventListener('click',() =>{
  if (input.value != '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList(input.value);
    input.value='';
    input.focus();
  }
});

function setChapterList(){
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList(){
  return JSON.parse(localStorage.getItem('myFavBOMList'))
}

function deleteChapter(chapter){
  chapter = chapter.slice(0, chapter.length -1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
}