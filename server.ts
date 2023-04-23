import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import { configure } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { charactersSlice } from 'state/reducers/charactersReducer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      const parts = template.split('<!--ssr-outlet-->');
      const { render, dispatchCharacters } = await vite.ssrLoadModule('/src/ServerApp.tsx');
      // await dispatchCharacters();

      const appHtml = await render(url, {
        // bootstrapScripts: ['/main.js'],
        onShellReady() {
          res.write(parts[0]);
          appHtml.pipe(res);
        },
        onAllReady() {
          res.write(parts[1]);
          res.end();
        },
        onError(e: Error) {
          console.error(e);
        },
      });
    } catch (e: unknown) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  app.listen(3001, () => {
    'listening on http://localhost:3001';
  });
}

createServer();
