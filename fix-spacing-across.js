const fs = require('fs');

const fileReplacements = {
  'components/home/hero.tsx': [
    {
      find: /<svg viewBox="0 0 1000 150" className="w-full h-auto block overflow-visible select-none" preserveAspectRatio="xMidYMid meet">\s*<text\s*x="50%"\s*y="50%"\s*dominantBaseline="middle"\s*textAnchor="middle"\s*className="font-heading font-medium fill-foreground"\s*style={{ fontSize: '136px', letterSpacing: '-0.01em' }}\s*>\s*OBX STUDIO\s*<\/text>\s*<\/svg>/g,
      replace: `<svg viewBox="0 0 780 140" className="w-full h-auto block overflow-visible select-none" preserveAspectRatio="xMidYMid meet">\n              <text\n                x="50%"\n                y="50%"\n                dominantBaseline="central"\n                textAnchor="middle"\n                className="font-heading font-bold fill-foreground"\n                style={{ fontSize: '136px', letterSpacing: '-0.03em' }}\n              >\n                OBX STUDIO\n              </text>\n            </svg>`
    }
  ],
  'components/home/intro.tsx': [
    {
      find: /gap-16 lg:gap-32/g,
      replace: 'gap-24 lg:gap-48'
    },
    {
      find: /lg:mt-32/g,
      replace: 'lg:mt-64'
    }
  ],
  'components/home/studio-about.tsx': [
    {
      find: /gap-12 md:gap-10/g,
      replace: 'gap-16 md:gap-24 lg:gap-32'
    },
    {
      find: /space-y-10 md:space-y-14/g,
      replace: 'space-y-16 md:space-y-24'
    }
  ],
  'components/home/what-we-design.tsx': [
    {
      find: /gap-12 md:gap-10/g,
      replace: 'gap-16 md:gap-24 lg:gap-32'
    },
    {
      find: /space-y-8 md:space-y-12/g,
      replace: 'space-y-12 md:space-y-20 lg:space-y-24'
    }
  ],
  'components/home/faq.tsx': [
    {
      find: /mb-16 md:mb-24/g,
      replace: 'mb-24 md:mb-32 lg:mb-40'
    }
  ],
  'components/home/studio-statement.tsx': [
    {
      find: /space-y-12/g,
      replace: 'space-y-16 md:space-y-24 lg:space-y-32'
    }
  ],
  'components/home/belief-statement.tsx': [
    {
      find: /space-y-12 md:space-y-16/g,
      replace: 'space-y-16 md:space-y-24 lg:space-y-32'
    }
  ],
  'components/homepage-works-parallax.tsx': [
    {
      find: /mb-16 md:mb-24/g,
      replace: 'mb-24 md:mb-32 lg:mb-40'
    },
    {
      find: /mt-20 md:mt-32/g,
      replace: 'mt-32 md:mt-48 lg:mt-64'
    },
    {
      find: /gap-12 md:gap-16 lg:gap-24/g,
      replace: 'gap-20 md:gap-32 lg:gap-48'
    }
  ],
  'components/home/the-method.tsx': [
    {
      find: /gap-12 md:gap-8 lg:gap-16/g,
      replace: 'gap-20 md:gap-16 lg:gap-32'
    },
    {
      find: /space-y-6/g,
      replace: 'space-y-10 lg:space-y-14'
    },
    {
      find: /space-y-3/g,
      replace: 'space-y-6 lg:space-y-8'
    }
  ]
};

Object.keys(fileReplacements).forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const replacements = fileReplacements[file];
    
    replacements.forEach(({ find, replace }) => {
      content = content.replace(find, replace);
    });
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated spacing in ${file}`);
  }
});
