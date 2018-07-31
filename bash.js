const pwdExports = require('./pwd');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  pwdExports(cmd);
  process.stdout.write('\nprompt > ');
})
