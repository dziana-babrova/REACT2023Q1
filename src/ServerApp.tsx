import {
  PipeableStream,
  RenderToPipeableStreamOptions,
  renderToPipeableStream,
} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { Location } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AnyAction, ThunkMiddleware, configureStore, createStore } from '@reduxjs/toolkit';
import { charactersSlice, CharactersGetRequestProps, fetchCharacters } from 'state/reducers/CharactersReducer';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { store } from 'state/store/Store';

export type RenderFunc = (
  url: string | Partial<Location>,
  opts: RenderToPipeableStreamOptions | undefined,
  store: ToolkitStore<
    CharactersGetRequestProps,
    AnyAction,
    [ThunkMiddleware<CharactersGetRequestProps, AnyAction>]
  >
) => PipeableStream;

// const store = configureStore(charactersSlice);

export async function dispatchCharacters() {
  await store.dispatch(fetchCharacters(''));
}

export const render: RenderFunc = (url, opts) => {
  const stream = renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );
  return stream;
};
