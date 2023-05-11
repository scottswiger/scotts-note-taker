const fs = require('fs');
const util = require('util');

const fileRead = util.promisify(fs.readFile);

//Writes data to a given destination 
const fileWrite = (destination, content) => {
    fs.writeFileSync(destination, JSON.stringify(content, null, 4), (err) => 
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
    );
};

//Reads and appends data to a file
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            fileWrite(file, parsedData);
        }
    });
};

module.exports = { fileRead, fileWrite, readAndAppend };