import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SocialLinksPage from './pages/SocialLinksPage/SocialLinksPage';
import './styles/App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/social-links' element={ <SocialLinksPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
