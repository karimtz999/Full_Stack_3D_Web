/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Enter a URL to generate a QR code:',
    }
  ])
  .then((answers) => {
    // Generate QR code image
    const url = answers.url;
    const qr_svg = qr.image(url, { type: 'png' });
    const qrStream = fs.createWriteStream('qr_img.png');
    qr_svg.pipe(qrStream);

    qrStream.on('finish', () => {
      console.log('QR code image has been saved as qr_img.png');
    });
    // Save URL to a text file
    fs.writeFile('URL.txt', url, (err) => {
      if (err) throw err;
      console.log('The URL has been saved to URL.txt');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error('Prompt couldn\'t be rendered in the current environment');
    } else {
      console.error('Something went wrong');
    }
  });
