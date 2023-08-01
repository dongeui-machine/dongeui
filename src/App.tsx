import React from 'react';
import './App.css';
import GlobalStyles from './tokens/GlobalStyled';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/headers/Header';
import MainPage from './pages/MainPage';
import { Footer } from './components/footers/Footer';
import { styled } from 'styled-components';

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
          </Routes>
        </ScrollContainer>
      </Router>
    </div>
  );
}

export default App;
