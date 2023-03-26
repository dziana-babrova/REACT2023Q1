import { Routes, Route } from 'react-router-dom';
import { Base } from 'components/Base';
import { AboutPage } from 'pages/about-page/About';
import { HomePage } from 'pages/home-page/Home';
import { NotFoundPage } from 'pages/not-found-page/NotFound';
import { FormsPage } from 'pages/forms-page/Forms';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Base></Base>}>
          <Route index path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="forms" element={<FormsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
