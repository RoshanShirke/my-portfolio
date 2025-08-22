const { exec } = require('child_process');
const chokidar = require('chokidar');

// Watch your project folder
const watcher = chokidar.watch('.', {
  ignored: /node_modules|\.git/,
  persistent: true
});

watcher.on('change', (path) => {
  console.log(`File changed: ${path}`);
  exec('git add . && git commit -m "Auto update" && git push', (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${err.message}`);
      return;
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }
    console.log(`Git output:\n${stdout}`);
  });
});

console.log('Watching for changes...');
