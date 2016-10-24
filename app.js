/* This example explains the usage of es6 promises with standard node.js functions. */

const fs = require('fs');

//Promise for fs.fileAccess
function fileAccess(filepath) {
	return new Promise((resolve, reject) => {
		fs.access(filepath, fs.F_OK, error => {
				if(!error) {
					resolve(filepath);
				} else {
					reject(error);
				}		
		});
	});
}

//Promise for fs.readFile
function fileReader(filepath) {
	return new Promise((resolve, reject) => {
		fs.readFile(filepath, 'utf8', (error, content) => {
			if (!error) {
				resolve(content);
			} else {
				reject(error);
			}
		});
	});
}

//use em..
fileAccess("myTestfile.txt")
	.then(fileReader)
	.then(content => {
		console.log(content);
	})
	.catch(error => {
		console.log(JSON.stringify(error));
	});