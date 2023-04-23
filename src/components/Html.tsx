import { ReactNode } from 'react';
import { PreloadedState } from '@reduxjs/toolkit';
import { RootState } from 'state/store/store';

type HtmlProps = {
  preloadedState?: PreloadedState<RootState>;
  children: ReactNode;
};

export const Html = ({ children, preloadedState }: HtmlProps) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>First React App</title>
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: `
                import RefreshRuntime from '/@react-refresh';
                RefreshRuntime.injectIntoGlobalHook(window);
                window.$RefreshReg$ = () => {};
                window.$RefreshSig$ = () => (type) => type;
                window.__vite_plugin_react_preamble_installed__ = true;
                `,
          }}
        />
        <script type="module" src="/src/ClientApp.tsx"></script>
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState || '').replace(
            /</g,
            '\\u003c'
          )}`,
        }}
      />{' '}
    </html>
  );
};
