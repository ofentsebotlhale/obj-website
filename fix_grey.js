const fs = require('fs');

function replaceFileContent(path, replacer) {
  let content = fs.readFileSync(path, 'utf8');
  let newContent = replacer(content);
  if (content !== newContent) {
    fs.writeFileSync(path, newContent, 'utf8');
    console.log(`Updated ${path}`);
  }
}

// app/privacy/page.tsx
replaceFileContent('app/privacy/page.tsx', (content) => {
  return content.replace(/text-muted-foreground/g, (match, offset, str) => {
    // leave the caption on line 70
    if (str.substring(Math.max(0, offset - 30), offset).includes('italic text-xs text-')) {
      return match;
    }
    return 'text-foreground';
  });
});

// app/work/page.tsx
replaceFileContent('app/work/page.tsx', (content) => {
  return content.replace('text-muted-foreground mb-6', 'text-foreground mb-6');
});

// app/page.tsx
replaceFileContent('app/page.tsx', (content) => {
  return content.replace('text-muted-foreground transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5 hover:text-foreground', 
                         'text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground/5');
});

// components/home/process.tsx
replaceFileContent('components/home/process.tsx', (content) => {
  return content.replace(/text-muted-foreground/g, 'text-foreground');
});

// components/home/intro.tsx
replaceFileContent('components/home/intro.tsx', (content) => {
  let res = content.replace('text-foreground/90', 'text-foreground');
  return res;
});

// components/home/what-we-build.tsx
replaceFileContent('components/home/what-we-build.tsx', (content) => {
  return content.replace(/text-muted-foreground/g, 'text-foreground');
});

// components/cookie-banner.tsx
replaceFileContent('components/cookie-banner.tsx', (content) => {
  let res = content;
  res = res.replace('text-sm font-light leading-relaxed text-muted-foreground select-none', 'text-sm font-light leading-relaxed text-foreground select-none');
  res = res.replace('text-xs text-muted-foreground uppercase tracking-wider', 'text-xs text-foreground uppercase tracking-wider');
  res = res.replace(/<span className="text-xs text-muted-foreground">/g, '<span className="text-xs text-foreground">');
  res = res.replace(/<span className="font-mono text-\[10px\] uppercase text-muted-foreground/g, '<span className="font-mono text-[10px] uppercase text-foreground');
  res = res.replace('border-foreground/30 text-muted-foreground hover:text-foreground', 'border-foreground text-foreground hover:bg-foreground hover:text-background');
  res = res.replace(/text-muted-foreground hover:text-foreground/g, 'text-foreground hover:opacity-70');
  return res;
});

// components/site-nav.tsx
replaceFileContent('components/site-nav.tsx', (content) => {
  let res = content.replace('text-muted-foreground pointer-events-none', 'text-foreground pointer-events-none underline underline-offset-8');
  res = res.replace(/text-muted-foreground([\s\S]*?)hello@obxstudio\.co\.za/, 'text-foreground$1hello@obxstudio.co.za');
  return res;
});

