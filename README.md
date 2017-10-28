# Notes app
Simple app to put into practice my learnings about Node.js file system module. This application consists of a command-line interface to add, remove, list and read notes according to user's input caught via Yargs library.
The commands and arguments will lead the app manipulate a JSON file generated in the root directory and output the status of the chosen operation.

## Adding notes
```
$ node app add --title="some title" --body="some body"
```
## Removing notes
```
$ node app remove --title="some title"
```
## Reading a specific note
```
$ node app read --title="some title"
```
## Listing the notes
```
$ node app list
```
