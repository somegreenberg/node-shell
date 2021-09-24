const fs = require('fs')
fs

module.exports = function (){
  process.stdout.write('prompt > ')
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    const input = cmd.split(' ');
    let argument = input[0];
    let file = input[1];
  if(argument=== 'cat'){
    process.stdout.write(process.cat(file));
  }
  else {
    process.stdout.write('You typed: ' + cmd);
  }
    process.stdout.write('\nprompt > ')
  })
  }
