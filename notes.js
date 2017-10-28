const fs = require('fs');

// Global functions

let saveNotes = (data) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(data));
};

let fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes-data.json'));
    } catch(e) {
        return [];
    }
};

let logNote = note => {
    console.log('--------------------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

// CRLD Methods

let addNote = (title, body) => {

    return new Promise((resolve, reject) => {
        let notes = fetchNotes();

        let note = { title, body };

        let uniqueTitle = !(notes.some(n => n.title === title));

        if(uniqueTitle) {
            notes.push(note);
            saveNotes(notes);
            
            return resolve(note);
        };

        reject('Duplicate title not allowed');
    });
      
};

let removeNote = (title) => {
    
    return new Promise((resolve, reject) => {

        let originalNotes = fetchNotes();
        
        let filteredNotes = originalNotes
            .filter(note => note.title !== title);
    
        saveNotes(filteredNotes);
        
        // resolve(originalNotes.length > filteredNotes.length);

        if(originalNotes.length > filteredNotes.length)
            return resolve(`Note "${title}" removed successfully`);
        
        reject(`Title ${title} not found`);

    });
};

let getNote = (title) => fetchNotes().find(current => current.title === title);

let getAll = () => fetchNotes();

module.exports = {
    addNote,
    removeNote,
    getAll,
    getNote,
    logNote
};