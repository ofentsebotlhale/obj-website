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
const files = [...walk('./app'), ...walk('./components')];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  content = content.replace(/px-5/g, 'px-4');
  content = content.replace(/md:px-10/g, 'md:px-6');
  content = content.replace(/py-24/g, 'py-12');
  content = content.replace(/py-36/g, 'py-16');
  content = content.replace(/md:py-36/g, 'md:py-16');
  content = content.replace(/pt-24/g, 'pt-12');
  content = content.replace(/md:pt-24/g, 'md:pt-16');
  content = content.replace(/pb-24/g, 'pb-12');
  content = content.replace(/md:pb-24/g, 'md:pb-16');
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated misc in ${file}`);
  }
});
