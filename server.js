const express = require('express');
const { exec } = require('child_process');
const app = new express();
app.use(express.static('./'))
app.get('/', function(req, res) {
  res.render(__dirname + '/index.html');
});
app.get('/test',function(req, res) {
 exec('git pull ', (error, stdout, stderr) => {
     if(error) {
	console.log( 'pull error' + error);
	return;
	}
	exec('pm2 restart 0',(err,stdout,stderr)=> {
		if(err) {
			console.log('restart err' + err);
			return;
		}
		console.log('ok')
	});	
  }
 );
res.end('ok!')
})
app.listen(3000);
