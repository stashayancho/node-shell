const pwdExports = require('./pwd');
const ls = require('./ls');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  pwdExports(cmd);
  ls(cmd);
  process.stdout.write('\nprompt > ');
})
