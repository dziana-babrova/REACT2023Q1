import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { Provider } from 'react-redux';
import { Request, Response } from 'express';
import { Html } from 'components/Html';
import { setupStore } from 'state/store/store';
import { fetchCharacters } from 'state/reducers/charactersReducer';

export async function render(req: Request, res: Response) {
  const store = setupStore({});
  await store.dispatch(fetchCharacters(''));
  const state = store.getState();

  const html = renderToPipeableStream(
    <Html preloadedState={state}>
      <Provider store={store}>
        <StaticRouter location={req.originalUrl}>
          <App />
        </StaticRouter>
      </Provider>
    </Html>,
    {
      onShellReady() {
        res.setHeader('content-type', 'text/html');
        html.pipe(res);
      },
      onError(e: unknown) {
        console.error(e);
      },
    }
  );
}
