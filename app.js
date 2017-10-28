const notes = require('./notes');
const argv = require('./yargs-config');

const command = argv._[0];

switch(command) {
    case 'add':
    
        notes.addNote(argv.title, argv.body)
            .then(note => {
                notes.logNote(note);
            })
            .catch(err => console.log(err));

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
        console.log(`Printing ${list.length} note(s).`);
        list.forEach(n => notes.logNote(n));
        
        break;
    default:
        console.log('Command not recognized');
}