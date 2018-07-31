module.exports = function pwd(cmd){
    if (cmd === 'pwd') {
        process.stdout.write(__dirname);
    }
}

