import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { Location } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'state/store/Store';

export function render(
  url: string | Partial<Location>,
  opts: RenderToPipeableStreamOptions | undefined
) {
  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );
  return stream;
}
