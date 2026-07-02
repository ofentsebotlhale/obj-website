const fs = require('fs');
let content = fs.readFileSync('lib/blogs.ts', 'utf8');

// A simple way to delete an object from an array in a formatted TS file:
// Find `{ slug: '...',` and delete until `  },`
function deletePost(slug) {
  const regex = new RegExp(`  \\{\\s*slug:\\s*'${slug}'[\\s\\S]*?\\s\\s\\},?\\n?`);
  content = content.replace(regex, '');
}

// But wait, I need to copy Post D's points into Post C.
const postDRegex = new RegExp(`  \\{\\s*slug:\\s*'website-design-costs-key-influencing-factors-explained'[\\s\\S]*?\\s\\s\\},?\\n?`);
const postDMatch = content.match(postDRegex);

if (postDMatch) {
  const postDText = postDMatch[0];
  const welcomeMatch = postDText.match(/welcomeText:\s*'(.*?)',/);
  const pointsMatch = postDText.match(/points:\s*\[[\s\S]*?\]\s*,/);
  const excerptMatch = postDText.match(/excerpt:\s*'(.*?)',/);

  if (welcomeMatch && pointsMatch) {
    const postCRegex = new RegExp(`(  \\{\\s*slug:\\s*'how-much-does-a-website-cost-in-south-africa'[\\s\\S]*?welcomeText:\\s*')[^']*?(',[\\s\\S]*?points:\\s*\\[[\\s\\S]*?\\]\\s*,)`);
    content = content.replace(postCRegex, `$1${welcomeMatch[1]}$2`);
    // Then replace points
    const postCRegex2 = new RegExp(`(  \\{\\s*slug:\\s*'how-much-does-a-website-cost-in-south-africa'[\\s\\S]*?points:\\s*\\[)[\\s\\S]*?(\\]\\s*,)`);
    content = content.replace(postCRegex2, `$1${pointsMatch[0].substring(8).slice(0, -1)}$2`);
  }
}

deletePost('web-design-johannesburg-what-businesses-should-look-for');
deletePost('website-design-costs-key-influencing-factors-explained');

fs.writeFileSync('lib/blogs.ts', content);
