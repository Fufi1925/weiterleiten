const http = require('node:http');
const target = 'https://cloudtix.up.railway.app';
http.createServer((req, res) => {
  if (req.url === '/healthz') { res.writeHead(200, {'Content-Type':'text/plain'}); return res.end('ok'); }
  res.writeHead(302, { Location: target + (req.url.startsWith('/') ? req.url : '/'), 'Cache-Control': 'no-store' });
  res.end();
}).listen(Number(process.env.PORT || 8080), '0.0.0.0');
