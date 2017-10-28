const yargs = require('yargs');

const options = {
    title: {
        describe: 'Title of the note',
        demand: true,
        alias: 't'
    },
    body: {
        describe: 'The body content of the note',
        demand: true,
        alias: 'b'
    }
};

let config = yargs
    .command('add', 'Add a new note to the file', {
        title: options.title,
        body: options.body
    })
    .command('read', 'Fetches and read a note from the file', {
        title: options.title
    })
    .command('remove', 'Removes a note from the file', {
        title: options.title
    })
    .command('list', 'Lists all notes in the file')
    .help()
    .argv;

module.exports = config;