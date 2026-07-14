const fs = require('fs');
const file = 'app/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  `<>{/* <SmoothScroll> */}`,
  `<SmoothScroll>`
);

content = content.replace(
  `{/* </SmoothScroll> */}</>`,
  `</SmoothScroll>`
);

fs.writeFileSync(file, content);
console.log("Restored layout");
