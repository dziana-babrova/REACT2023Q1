import { Provider } from 'react-redux';
import App from 'App';

export function render(store) {
  return renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
