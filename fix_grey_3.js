const fs = require('fs');

function replaceFileContent(path, replacer) {
  let content = fs.readFileSync(path, 'utf8');
  let newContent = replacer(content);
  if (content !== newContent) {
    fs.writeFileSync(path, newContent, 'utf8');
    console.log(`Updated ${path}`);
  }
}

const files = [
  'app/blog/[slug]/page.tsx',
  'app/blog/page.tsx',
  'app/studio/page.tsx',
  'app/services/page.tsx',
  'app/services/web-development/page.tsx'
];

files.forEach(file => {
  if(fs.existsSync(file)) {
    replaceFileContent(file, (content) => {
      // replace all text-muted-foreground and text-foreground/80 with text-foreground
      return content.replace(/text-muted-foreground/g, 'text-foreground').replace(/text-foreground\/80/g, 'text-foreground');
    });
  }
});
