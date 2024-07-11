const sys = require('sys');
const fs = require('fs');
const compiler = require('scss');

fs.readFile(__dirname + '/style.scss', function(err, scssFile) {
  compiler.compile(scssFile.toString(), function(err, css) {
    if(err) {
      sys.puts(sys.inspect(err));
    } else {
      sys.puts(css);
    }
  });
});