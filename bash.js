
const pwd = require('./pwd')


process.stdout.write('prompt > ')
process.stdin.on('data', (data) => {
  let cmd = data.toString().trim();
  const input = cmd.split(' ');
  cmd = input[0];
  let file = input[1];
if(cmd === 'pwd'){
  pwd();
}
else if(cmd === 'ls'){
  // eslint-disable-next-line no-unused-vars
  const ls = require('./ls')
}
else if(cmd === 'cat'){
  const cat = require('./cat')
  cat(file);
}
else if(cmd === 'curl'){
  const curl = require('./curl')
  curl(file);
}
else {
  process.stdout.write('You typed: ' + cmd);
}
  process.stdout.write('\nprompt > ')
})
// const cat = require('./cat')

// cat();
