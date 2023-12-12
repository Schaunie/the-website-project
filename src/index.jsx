import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom'
import { SurveyProvider } from './utils/context';
import Home from './pages/Home';
import Results from './pages/Results'
import GlobalStyle from './utils/style/GlobalStyle';
import Header from './components/Header';
import Footer from './components/Footer';
import OurProject from './pages/OurProject';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <SurveyProvider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/notre-projet" element={<OurProject />} />
        </Routes>
        <Footer />
      </SurveyProvider>
    </HashRouter>
  </React.StrictMode>
);


