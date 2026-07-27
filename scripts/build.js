const fs = require('fs');
const https = require('https');
const cheerio = require('cheerio');
const path = require('path');

];

const baseUrl = 'https://www.institutehub.in';

const fetchHtml = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchHtml(res.headers.location).then(resolve).catch(reject);
      }
      
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
};

const ensureDirectoryExists = (filePath) => {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExists(dirname);
  fs.mkdirSync(dirname);
};

async function build() {
  console.log('Reading layout.html...');
  const layoutHtml = fs.readFileSync(path.join(__dirname, '../src/layout.html'), 'utf8');
  
  for (const page of pages) {
    console.log(`Fetching ${page.url}...`);
    try {
      const html = await fetchHtml(baseUrl + page.url);
      const $ = cheerio.load(html);
      
      let mainContent = $('main').html() || $('.main-wrapper').html() || $('.container').first().html() || '<p>Content being updated.</p>';
      
      const $content = cheerio.load(mainContent);
      $content('*').removeAttr('class').removeAttr('style');
      
      const premiumContent = `
        <div class="relative bg-primary pt-[150px] pb-24 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-90 z-0"></div>
          <div class="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
          <div class="container mx-auto px-6 lg:px-12 relative z-10 animate-on-scroll">
            <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">${page.title}</h1>
            <div class="h-1 w-20 bg-accent rounded-full"></div>
          </div>
        </div>

        <div class="container mx-auto px-6 lg:px-12 py-16 -mt-10 relative z-20">
          <div class="bg-white rounded-[24px] shadow-premium p-8 lg:p-12 animate-on-scroll">
            <div class="prose prose-lg prose-blue max-w-none prose-headings:text-primary prose-a:text-primary-light">
              ${$content.html()}
            </div>
          </div>
        </div>
      `;
      
      const depth = page.file.split('/').length - 1;
      const prefix = depth > 0 ? '../'.repeat(depth) : './';
      
      let finalHtml = layoutHtml.replace('{{CONTENT}}', premiumContent);
      
      finalHtml = finalHtml.replace(/href="([a-zA-Z0-9\-\/]+\.html)"/g, (match, p1) => {
        if (p1.startsWith('http') || p1.startsWith('#')) return match;
        return `href="${prefix}${p1}"`;
      });
      finalHtml = finalHtml.replace(/src="\.\/src\/main\.js"/g, `src="${prefix}src/main.js"`);
      finalHtml = finalHtml.replace(/href="\.\/dist\/output\.css"/g, `href="${prefix}dist/output.css"`);
      
      const fullPath = path.join(__dirname, '..', page.file);
      ensureDirectoryExists(fullPath);
      
      fs.writeFileSync(fullPath, finalHtml);
      console.log(`Saved -> ${page.file}`);
      
    } catch (e) {
      console.error(`Failed to fetch ${page.url}:`, e.message);
    }
  }
  
  console.log('All inner pages generated successfully!');
}

build();
