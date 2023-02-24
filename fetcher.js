const url = process.argv[2];
const filePath = process.argv[3];

const request = require('request');
request(url, (error, response, body) => {
console.log('error', error)
console.log('statusCode:', response && response.statusCode);
console.log('body:', body)
})

