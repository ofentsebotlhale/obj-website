const fs = require('fs');
const file = 'components/site-nav.tsx';
let content = fs.readFileSync(file, 'utf8');

// Fix viewport height
content = content.replace('h-[100svh] max-h-[100svh]', 'h-[100dvh]');

// Make links bigger
content = content.replace('gap-2 sm:gap-3 md:gap-4.5 w-full', 'gap-4 sm:gap-6 md:gap-8 w-full');
content = content.replace('text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl', 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl');

// Make essential info bigger
content = content.replace('text-xs sm:text-sm md:text-base text-foreground', 'text-sm sm:text-base md:text-lg text-foreground');
content = content.replace('text-xs sm:text-sm font-medium', 'text-sm sm:text-base font-medium');
content = content.replace('h-4 w-4 sm:h-5 sm:w-5', 'h-5 w-5 sm:h-6 sm:w-6');
content = content.replace('space-y-4 sm:space-y-6', 'space-y-6 sm:space-y-8');
content = content.replace('text-[10px] md:text-[11px]', 'text-[11px] md:text-xs');

fs.writeFileSync(file, content);
