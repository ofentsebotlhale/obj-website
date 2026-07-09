const fs = require('fs');
const { execSync } = require('child_process');

function replaceFileContent(path, replacer) {
  let content = fs.readFileSync(path, 'utf8');
  let newContent = replacer(content);
  if (content !== newContent) {
    fs.writeFileSync(path, newContent, 'utf8');
    console.log(`Updated ${path}`);
  }
}

// app/services/web-design/page.tsx
replaceFileContent('app/services/web-design/page.tsx', (content) => {
  return content.replace(/text-muted-foreground/g, 'text-foreground').replace(/text-foreground\/80/g, 'text-foreground');
});

// app/terms/page.tsx
replaceFileContent('app/terms/page.tsx', (content) => {
  return content.replace(/text-muted-foreground/g, 'text-foreground');
});

// app/contact/page.tsx
replaceFileContent('app/contact/page.tsx', (content) => {
  let res = content.replace('text-pretty leading-relaxed text-muted-foreground', 'text-pretty leading-relaxed text-foreground');
  // keep dt (labels) as muted-foreground
  return res;
});

// components/studio/process-accordion.tsx
replaceFileContent('components/studio/process-accordion.tsx', (content) => {
  return content.replace(/text-muted-foreground/g, 'text-foreground');
});

// components/contact/contact-form.tsx
replaceFileContent('components/contact/contact-form.tsx', (content) => {
  let res = content;
  // keep line 33, 34, 81 as form placeholder text.
  res = res.replace('<p className="mt-3 max-w-md text-pretty leading-relaxed text-muted-foreground">', '<p className="mt-3 max-w-md text-pretty leading-relaxed text-foreground">');
  res = res.replace('text-muted-foreground transition-colors hover:text-foreground', 'text-foreground transition-colors hover:opacity-70');
  res = res.replace('text-xs text-muted-foreground', 'text-xs text-foreground'); // success/error msg
  return res;
});

// components/work/asymmetrical-project-list.tsx
replaceFileContent('components/work/asymmetrical-project-list.tsx', (content) => {
  let res = content.replace('text-foreground/90', 'text-foreground');
  // lines 102, 111, 117 are body copy (e.g. font-sans text-base leading-relaxed text-muted-foreground)
  res = res.replace(/font-sans text-base leading-relaxed text-muted-foreground/g, 'font-sans text-base leading-relaxed text-foreground');
  // line 61 is "View Project" link: font-mono text-[11px] uppercase tracking-widest text-muted-foreground
  res = res.replace('font-mono text-[11px] uppercase tracking-widest text-muted-foreground', 'font-mono text-[11px] uppercase tracking-widest text-foreground');
  return res;
});

