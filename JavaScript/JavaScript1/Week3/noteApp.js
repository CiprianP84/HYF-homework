// NOnoN0nOYes (Note taking app)
const notes = [];

// Save the note
function saveNote(content, id) {
  const note = {
    content: content,
    id: id,
  };
  notes.push(note);
}

// Get the note
function getNote(id) {
  // Making sure that the ID is a number
  if (typeof id !== 'number') {
    console.log('The ID must be a number, try again.');
    return;
  }
  // Looping through the notes to match ID
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }

  console.log('Note does not exist, please check your ID');
  return;
}

// Log out all notes
function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(`The note with id: ${notes[i].id}, has the following note text: "${notes[i].content}".`);
  }
}

// Unique functionality - search by keyword
function searchForWord(keyword) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].content.includes(keyword)) {
      console.log(`The note with id: ${notes[i].id}, has the following note text that includes the keyword "${keyword}": "${notes[i].content}".`);
      }
      }
}

// Save some notes
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Buy cat food", 3);
saveNote("Pick up laundry detergent", 4)

// Log out all notes
logOutNotesFormatted();
// Log out notes with the keyword "laundry"
searchForWord("laundry");
