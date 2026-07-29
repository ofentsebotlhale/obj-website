const https = require('https');

const key = '6200953794164cb8b1a91e2a5726bed6';
const host = 'obxstudio.co.za';
const keyLocation = `https://${host}/${key}.txt`;

const fs = require('fs');
const blogsContent = fs.readFileSync('lib/blogs.ts', 'utf8');
const slugs = [...blogsContent.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);

const staticPages = [
  '',
  '/studio',
  '/services',
  '/services/web-design',
  '/services/web-development',
  '/work',
  '/blog',
  '/contact',
  '/privacy',
  '/terms'
];

const urls = [
  ...staticPages.map(page => `https://${host}${page}`),
  ...slugs.map(slug => `https://${host}/blog/${slug}`)
];

const data = JSON.stringify({
  host: host,
  key: key,
  keyLocation: keyLocation,
  urlList: urls
});

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = https.request(options, (res) => {
  console.log(`api.indexnow.org Status Code: ${res.statusCode}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();

// Also submit to bing directly
const bingOptions = {
  hostname: 'www.bing.com',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(data)
  }
};

const reqBing = https.request(bingOptions, (res) => {
  console.log(`www.bing.com Status Code: ${res.statusCode}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});
reqBing.write(data);
reqBing.end();

