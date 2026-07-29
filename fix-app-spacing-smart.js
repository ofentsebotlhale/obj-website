const fs = require('fs');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}
const files = walk('./app');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // For sections / divs that have horizontal padding
  content = content.replace(/className="([^"]*)px-4 ([^"]*)md:px-6([^"]*)"/g, 'className="$1px-[5vw] $2md:px-[8vw]$3"');
  content = content.replace(/className="([^"]*)px-3 ([^"]*)md:px-4([^"]*)"/g, 'className="$1px-[5vw] $2md:px-[8vw]$3"');
  
  content = content.replace(/py-16 md:py-20/g, 'py-[10vh] md:py-[15vh]');
  content = content.replace(/py-12 md:py-16/g, 'py-[10vh] md:py-[15vh]');
  content = content.replace(/pb-20 md:pb-16/g, 'pb-[10vh] md:pb-[15vh]');
  content = content.replace(/pb-16 md:pb-20/g, 'pb-[10vh] md:pb-[15vh]');
  content = content.replace(/pb-12 md:pb-16/g, 'pb-[10vh] md:pb-[15vh]');
  content = content.replace(/pb-16 md:pb-12/g, 'pb-[10vh] md:pb-[15vh]');
  content = content.replace(/pt-16/g, 'pt-[10vh]');
  content = content.replace(/pb-16/g, 'pb-[10vh]');
  content = content.replace(/py-16/g, 'py-[10vh]');
  content = content.replace(/py-12 md:px-6/g, 'py-[10vh] md:px-[8vw]'); // if any
  content = content.replace(/pb-12 md:px-6/g, 'pb-[10vh] md:px-[8vw]'); // if any

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated spacing in ${file}`);
  }
});
