import { Routes, Route } from 'react-router-dom';
import { Base } from 'components/Base';
import { AboutPage } from 'pages/About';
import { HomePage } from 'pages/Home';
import { NotFoundPage } from 'pages/NotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Base></Base>}>
          <Route index path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
