import React from 'react';
import './App.css';
import GlobalStyles from './tokens/GlobalStyled';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/headers/Header';
import MainPage from './pages/MainPage';
import { styled } from 'styled-components';
import IntroCompanyPage, { IntroCompanyRoadPage } from './pages/IntroCompanyPage';
import DongeuiMedicalPage from './pages/DongeuiMedicalPage';
import DongeuiMachinePage from './pages/DongeuiMachinePage';
import DongeuiEndPPage from './pages/DongeuiEndPPage';

export const ScrollContainer = styled.div`
    width: 100vw;
    flex-grow: 1;
    overflow-y: auto;
`
function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Router>
        <Header/>
        <ScrollContainer>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/intro' element={<IntroCompanyPage/>}/>
            <Route path='/intro/road' element={<IntroCompanyRoadPage/>}/>
            <Route path='/medical' element={<DongeuiMedicalPage/>}/>
            <Route path='/machine' element={<DongeuiMachinePage/>}/>
            <Route path='/truck' element={<DongeuiEndPPage/>}/>
          </Routes>
        </ScrollContainer>
      </Router>
    </div>
  );
}

export default App;