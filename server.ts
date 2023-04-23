import express from 'express';
import { createServer as createViteServer } from 'vite';

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    try {
      const { render } = await vite.ssrLoadModule('/src/ServerApp.tsx');

      await render(req, res);
    } catch (e) {
      console.log(e);
    }
  });

  app.listen(3001, () => {
    console.log('listening on http://localhost:3001');
  });
}

createServer();
