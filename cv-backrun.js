var exec = require('child_process').exec;
var cmd = 'nohup npm run dev';

exec(cmd, function(error, stdout, stderr) {  
  process.exit(0);
});
