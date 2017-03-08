console.log('Starting app.js')

const fs = require('fs');
const os = require('os');
const _ = require('lodash')
const notes = require('./notes.js');

//only filter out same name
var filteredArray = _.uniq(['Zi Gang', 1, 'Zi Gang' , 2 ,3, 4]);
console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('zi gang'));

// let res = notes.addNote();
// console.log(res);
// console.log('result:', notes.add(5, 9));

// var user = os.userInfo();
// var mem = os.freemem();
// console.log(mem);

//node 7 write style
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });

//option node 7
// fs.appendFileSync('greetings.txt', 'Hello Word!');


//Option one for 7.6 node js version
// fs.appendFile('greetings.txt', 'Hello World!', function (err)) {
//   if (err) {
//     console.log('Unable to write the file');
//   }
// }
