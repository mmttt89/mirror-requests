import express from 'express';
import morgan from 'morgan';
import { createProxyMiddleware } from 'http-proxy-middleware';

const port = 8003;
const proxy = createProxyMiddleware({
  // target : 'www.yourwebsite.com/api' 
  target: 'your target url',
  changeOrigin: true,
});

const app = express();
app.use(morgan('combined'));
app.use(proxy);
app.listen(port, () => console.log(`Listening on port ${port}`));
