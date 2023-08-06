import React, { useEffect } from 'react';
import './App.css';
import GlobalStyles from './tokens/GlobalStyled';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/headers/Header';
import MainPage from './pages/MainPage';
import { styled } from 'styled-components';
import IntroCompanyPage from './pages/IntroCompanyPage';
import ProductPage from './pages/ProductPage';
import DongeuiEndPPage from './pages/DongeuiEndPPage';
import RoadPage from './pages/RoadPage';
import { useDispatch } from 'react-redux';
import { readBrowserWidth } from './redux/actions/browserWidthAction';

export const ScrollContainer = styled.div`
    width: 100vw;
    flex-grow: 1;
    overflow-y: auto;
`
function App() {
  const dispatch = useDispatch();

  const handleResize = () => {
    dispatch(readBrowserWidth());
  }

  useEffect(()=>{
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener('resize',handleResize);
    }
  },[]);

  return (
    <div className="App">
      <GlobalStyles/>
      <Router>
        <Header/>
        <ScrollContainer>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/intro' element={<IntroCompanyPage/>}/>
            <Route path='/road' element={<RoadPage/>}/>
            <Route path='/products' element={<ProductPage/>}/>
            <Route path='/truck' element={<DongeuiEndPPage/>}/>
          </Routes>
        </ScrollContainer>
      </Router>
    </div>
  );
}

export default App;