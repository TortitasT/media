const args = process.argv;
const fs = require('fs');
const path = require('path');

if (args.length < 2) {
  console.error('Usage: node drive-to-md.js <shared-urls> <output-file>');
  process.exit(1);
}

const outputFile = args[args.length - 1];
const sharedUrls = args.slice(2, -1);

console.log('Output file:', outputFile);
console.log('Shared URLs:', sharedUrls);

const driveUrls = sharedUrls.flatMap((txt) => {
  return txt.split(', ');
});

function getDriveId(url) {
  const splits = url.split('/');
  const id = splits[splits.length - 2];
  return id;
}

function buildDriveThumnail(id, size = '3000') {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;
}

function driveUrlsToMarkdown(urls) {
  const markdown = urls.map((url) => {
    const id = getDriveId(url);
    const thumbnail = buildDriveThumnail(id);
    return `[![](${thumbnail})](${url})`;
  });
  return markdown.join('\n');
}

function writeToFile(filePath, data) {
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('File written successfully:', filePath);
    }
  });
}

const markdown = driveUrlsToMarkdown(driveUrls);
writeToFile(outputFile, markdown);
