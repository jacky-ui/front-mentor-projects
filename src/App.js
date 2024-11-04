import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SocialLinksPage from './pages/SocialLinksPage/SocialLinksPage';
import './styles/App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage /> }/>
          <Route path='/social-links' element={ <SocialLinksPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
