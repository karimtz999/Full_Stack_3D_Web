const fs = require('fs');

// Append text to the file
fs.appendFileSync('meme.txt', 'hi karim\n');

// Read and display the contents of the file
const data = fs.readFileSync('meme.txt', 'utf8');
console.log(data);

// Create a new file
fs.writeFileSync('meme2.txt', 'hello\n');

// Transfer (rename) the file
fs.renameSync('meme.txt', 'meme2.txt');

// Delete the file
// fs.unlinkSync('meme2.txt');


