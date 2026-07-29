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

  // Replacements
  const replacements = {
    'py-48': 'py-20',
    'py-32': 'py-16',
    'pb-48': 'pb-20',
    'pb-32': 'pb-16',
    'py-60': 'py-24',
    'py-40': 'py-20',
    'mt-80': 'mt-32',
    'pt-44': 'pt-24',
    'pt-36': 'pt-20',
    'py-28': 'py-16',
    'pb-40': 'pb-20',
    'pb-28': 'pb-16',
    'pt-40': 'pt-20',
    'pt-32': 'pt-16',
    'pb-24': 'pb-12'
  };

  for (const [find, replace] of Object.entries(replacements)) {
    // only replace whole words to avoid replacing pt-400 or something if it exists
    const regex = new RegExp(`\\b${find}\\b`, 'g');
    content = content.replace(regex, replace);
  }

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
