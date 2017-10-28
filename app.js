console.log(`starting app.js`);

const notes = require('./notes');
const yargs = require('yargs');

const argv = yargs.argv;
const command = argv._[0];

switch(command) {
    case 'add':
        let note = notes.addNote(argv.title, argv.body);
        
        if(note)
            return notes.logNote(note);
        
        console.log('Title already in use. Duplicate titles not allowed!');

        break;
    case 'remove':
        let noteRemoved = notes.removeNote(argv.title);
        
        let message = noteRemoved ? `Note "${argv.title}" removed` : `Note titled "${argv.title}" not found.`;
        
        console.log(message);

        break;
    case 'read':
        let targetNote = notes.getNote(argv.title);
        
        return targetNote ? notes.logNote(targetNote) : console.log(`Note titled "${argv.title}" not found.`);

        break;
    case 'list':
        let list = notes.getAll();
        console.log('Notes:');
        console.log(list);
        
        break;
    default:
        console.log('Command not recognized');
}