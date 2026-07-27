const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf8');
const header = index.split('<!-- Hero Section with Vanilla JS Slider -->')[0];
const footer = '\n  <!-- Premium Global Footer Placeholder -->\n  <footer class="bg-[#081C3A] text-white py-12">\n    <div class="container mx-auto px-6 lg:px-12 text-center text-sm text-gray-400">\n      &copy; ' + new Date().getFullYear() + ' InstituteHub. All Rights Reserved.\n    </div>\n  </footer>\n  <script src="./src/main.js"></script>\n</body>\n</html>';
const layout = header + '\n<main id="page-content" class="min-h-screen">\n{{CONTENT}}\n</main>\n' + footer;
fs.writeFileSync('src/layout.html', layout);
console.log('src/layout.html created');
