
const fs = require('fs')
fs

module.exports = function (fileName){
  // eslint-disable-next-line no-undef
  //commandLibrary.cat(fileName);
  fs.readFile(fileName, (err, data) => {
    if(err) throw err;
    console.log(data);
    // eslint-disable-next-line no-undef
    process.stdout.write(data);
  }
  )
    process.stdout.write('\nprompt > ')
  }

