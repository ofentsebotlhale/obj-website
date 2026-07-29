const fs = require('fs');

const files = [
  'components/home/belief-statement.tsx',
  'components/home/intro.tsx',
  'components/home/studio-about.tsx',
  'components/home/studio-statement.tsx',
  'components/home/faq.tsx',
  'components/home/hero.tsx',
  'components/home/client-endorsement.tsx',
  'components/home/the-method.tsx',
  'components/home/what-we-design.tsx',
  'components/homepage-works-parallax.tsx',
  'components/site-footer.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace py-16 md:py-20 or py-12 md:py-16 with py-[10vh] md:py-[15vh]
    content = content.replace(/py-16 md:py-20/g, 'py-[10vh] md:py-[15vh]');
    content = content.replace(/py-20 md:py-12/g, 'py-[10vh] md:py-[15vh]');
    content = content.replace(/py-12 md:py-16/g, 'py-[10vh] md:py-[15vh]');
    content = content.replace(/py-16 text-/g, 'py-[10vh] md:py-[15vh] text-');
    
    // Replace pb-16 md:pb-20
    content = content.replace(/pb-16 md:pb-20/g, 'pb-[10vh] md:pb-[15vh]');
    
    // Replace pt-10 md:pt-16
    content = content.replace(/pt-10 md:pt-16/g, 'pt-[10vh] md:pt-[15vh]');
    
    // Replace pt-20 pb-20 md:pt-28 md:pb-16
    content = content.replace(/pt-20 pb-20 md:pt-28 md:pb-16/g, 'py-[10vh] md:py-[15vh]');
    
    // Replace px-4 md:px-6
    content = content.replace(/px-4 md:px-6/g, 'px-[5vw] md:px-[8vw]');
    content = content.replace(/px-4 py-4 md:px-6 md:py-6/g, 'px-[5vw] py-[3vh] md:px-[8vw] md:py-[5vh]');
    content = content.replace(/px-3 md:px-4/g, 'px-[5vw] md:px-[8vw]');
    content = content.replace(/px-4 md:px-6 lg:px-8/g, 'px-[5vw] md:px-[8vw] lg:px-[10vw]');
    content = content.replace(/px-4 py-[10vh] md:py-[15vh] text-/g, 'px-[5vw] py-[10vh] md:px-[8vw] md:py-[15vh] text-');
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
