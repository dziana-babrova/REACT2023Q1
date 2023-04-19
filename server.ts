import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer } from 'vite';
import { PipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3001;
const html = fs.readFileSync(path.resolve(__dirname, './index.html')).toString();
const parts = html.split('not rendered');

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

const app = express();

// app.use(vite.middlewares);

// app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));
app.use(async (req, res) => {
  const url = req.url;
  res.write(parts[0]);

  const { render } = await vite.ssrLoadModule('./src/ServerApp.tsx');
  const stream = await render(url, {
    onShellReady() {
      stream.pipe(res);
    },
    onShellError() {},
    onAllReady() {
      res.write(parts[1]);
      res.status(200).set({ 'Content-Type': 'text/html' }).end();
    },
    onError(err: unknown) {
      console.error(err);
    },
  });
});

console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);
