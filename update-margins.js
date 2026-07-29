const fs = require('fs');
const path = require('path');

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

  // Reduce horizontal paddings
  content = content.replace(/px-5 md:px-10/g, 'px-3 md:px-5');
  content = content.replace(/px-4 md:px-6/g, 'px-3 md:px-5');
  content = content.replace(/px-6 md:px-12 lg:px-24/g, 'px-4 md:px-6 lg:px-8');

  // Reduce vertical paddings (large ones)
  content = content.replace(/py-24 md:py-32/g, 'py-12 md:py-16');
  content = content.replace(/py-28 md:py-40/g, 'py-16 md:py-20');
  content = content.replace(/pb-20 md:pb-28/g, 'pb-10 md:pb-16');
  content = content.replace(/pb-28 md:pb-36/g, 'pb-16 md:pb-20');
  content = content.replace(/pb-24 md:pb-32/g, 'pb-12 md:pb-16');
  content = content.replace(/pt-32 md:pt-40/g, 'pt-16 md:pt-20');
  content = content.replace(/pt-24 md:pt-32/g, 'pt-12 md:pt-16');
  content = content.replace(/pt-20 md:pt-32/g, 'pt-10 md:pt-16');
  
  // Hero specific
  content = content.replace(/px-5 py-5 md:px-10 md:py-8/g, 'px-3 py-3 md:px-5 md:py-5');
  
  // Reduce gaps
  content = content.replace(/gap-16 md:gap-24/g, 'gap-8 md:gap-12');
  content = content.replace(/gap-20/g, 'gap-10');
  
  // max-w changes to utilize more space
  content = content.replace(/max-w-\[1600px\]/g, 'max-w-[1920px]');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
