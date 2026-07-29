const fs = require('fs');

const files = [
  'components/home/belief-statement.tsx',
  'components/home/intro.tsx',
  'components/home/studio-about.tsx',
  'components/home/studio-statement.tsx',
  'components/home/faq.tsx',
  'components/home/client-endorsement.tsx',
  'components/home/the-method.tsx',
  'components/home/what-we-design.tsx',
  'components/homepage-works-parallax.tsx',
  'components/site-footer.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // reset to clean classes
    // We will do exact regex replacements for the main container class names.
    
    // belief-statement.tsx
    content = content.replace(/className="px-4 py-\[10vh\] md:py-\[15vh\] md:px-6 bg-background text-foreground origin-bottom"/, 'className="px-[5vw] py-[15vh] md:py-[20vh] bg-background text-foreground origin-bottom"');
    
    // intro.tsx
    content = content.replace(/className="flex min-h-\[100svh\] flex-col justify-center px-4 pt-20 pb-20 md:px-4 md:pt-28 md:pb-16 bg-foreground text-background"/, 'className="flex min-h-[100svh] flex-col justify-center px-[5vw] py-[15vh] md:py-[20vh] bg-foreground text-background"');
    
    // studio-about.tsx
    content = content.replace(/className="px-4 py-\[10vh\] md:py-\[15vh\] md:px-6 bg-foreground text-background border-t border-border\/10"/, 'className="px-[5vw] py-[15vh] md:py-[20vh] bg-foreground text-background border-t border-border/10"');
    
    // studio-statement.tsx
    content = content.replace(/className="flex min-h-\[90svh\] flex-col justify-center bg-foreground px-4 py-\[10vh\] md:py-\[15vh\] text-background md:px-6 md:py-20"/, 'className="flex min-h-[90svh] flex-col justify-center bg-foreground px-[5vw] py-[15vh] md:py-[20vh] text-background"');
    
    // faq.tsx
    content = content.replace(/className="px-4 py-\[10vh\] md:py-\[15vh\] md:px-6 bg-background text-foreground border-t border-border\/10"/, 'className="px-[5vw] py-[15vh] md:py-[20vh] bg-background text-foreground border-t border-border/10"');
    
    // client-endorsement.tsx
    content = content.replace(/className="px-4 py-\[10vh\] md:py-\[15vh\] md:px-6 bg-foreground text-background border-t border-border\/10 overflow-hidden"/, 'className="px-[5vw] py-[15vh] md:py-[20vh] bg-foreground text-background border-t border-border/10 overflow-hidden"');
    
    // the-method.tsx
    content = content.replace(/className="px-4 pb-\[10vh\] md:pb-\[15vh\] md:px-6 bg-background text-foreground"/, 'className="px-[5vw] pb-[15vh] md:pb-[20vh] bg-background text-foreground"');
    
    // what-we-design.tsx
    content = content.replace(/className="px-4 py-\[10vh\] md:py-\[15vh\] md:px-6 bg-background text-foreground border-t border-border\/10"/, 'className="px-[5vw] py-[15vh] md:py-[20vh] bg-background text-foreground border-t border-border/10"');
    
    // homepage-works-parallax.tsx
    content = content.replace(/className="bg-foreground text-background py-\[10vh\] md:py-\[15vh\] px-\[5vw\] md:px-\[8vw\] w-full overflow-hidden"/, 'className="bg-foreground text-background py-[15vh] md:py-[20vh] px-[5vw] md:px-[8vw] w-full overflow-hidden"');
    
    // site-footer.tsx
    content = content.replace(/className="relative flex min-h-\[100svh\] flex-col justify-between overflow-hidden bg-background text-foreground pt-\[10vh\] md:pt-\[15vh\]"/, 'className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-background text-foreground pt-[15vh] md:pt-[20vh]"');

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Cleaned ${file}`);
  }
});
