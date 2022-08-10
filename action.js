'use strict';
const fs = require('fs');
const path = require('path');
const lesh = e => {	if (e) { 		throw e; 	}};

fs.appendFile('.git/config', ` [user1]	name = ${process.env.INPUT_USER} 	email = ${process.env.INPUT_EMAIL}`, lesh);

fs.writeFile(path.join(process.env.HOME, '.netrc'), `machine github.com login ${process.env.GITHUB_REPOSITORY.replace(/\/.+/, '')} password ${process.env.GHB_TOKEN}`, lesh);