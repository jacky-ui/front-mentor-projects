import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SocialLinksPage from './pages/SocialLinksPage/SocialLinksPage';
import AdviceGenerator from './pages/AdviceGeneratorPage/AdviceGeneratorPage';
import RecipePage from './pages/RecipePage/RecipePage';
import EasyBankPage from './pages/EasyBankPage/EasyBankPage.js';
import './styles/App.scss';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage /> }/>
          <Route path='/social-links' element={ <SocialLinksPage />}/>
          <Route path='/advice-generator' element={ <AdviceGenerator />} />
          <Route path='/recipe-page' element={ <RecipePage /> } />
          <Route path='/easybank' element={ <EasyBankPage /> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
