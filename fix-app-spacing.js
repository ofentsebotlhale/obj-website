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

  // Horizontal spacing
  content = content.replace(/px-4 md:px-6/g, 'px-[5vw] md:px-[8vw]');
  content = content.replace(/px-4 sm:px-10/g, 'px-[5vw] sm:px-[10vw]');
  content = content.replace(/px-3 md:px-4/g, 'px-[5vw] md:px-[8vw]');
  
  // Vertical spacing
  content = content.replace(/py-16 md:py-20/g, 'py-[10vh] md:py-[15vh]');
  content = content.replace(/py-12 md:py-16/g, 'py-[10vh] md:py-[15vh]');
  content = content.replace(/pb-20 md:pb-16/g, 'pb-[10vh] md:pb-[15vh]');
  content = content.replace(/pb-16 md:pb-20/g, 'pb-[10vh] md:pb-[15vh]');
  content = content.replace(/pb-12 md:pb-16/g, 'pb-[10vh] md:pb-[15vh]');
  content = content.replace(/pb-16 md:pb-12/g, 'pb-[10vh] md:pb-[15vh]');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated spacing in ${file}`);
  }
});
