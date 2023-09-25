import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/headers/Header';
import MainPage from './pages/MainPage';
import IntroCompanyPage from './pages/IntroCompanyPage';
import ProductPage from './pages/ProductPage';
import DongeuiEndPPage from './pages/DongeuiEndPPage';
import RoadPage from './pages/RoadPage';
import { useDispatch } from 'react-redux';
import { readBrowserWidth } from './redux/actions/browserWidthAction';
import { useSelector } from 'react-redux';
import { RootState } from './types/ReducerReturn';
import { HeaderMobile } from './components/headers/HeaderMobile';
import ProductDetailPage from './pages/ProductDetailPage';

function App() {
  const dispatch = useDispatch();
  const deviceWidth = useSelector((state:RootState)=>state.browserWidthReducer.width);

  const handleResize = () => {
    dispatch(readBrowserWidth());
  }

  useEffect(()=>{
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener('resize',handleResize);
    }
  });

  return (
    <>
        { deviceWidth>850? <Header/>:<HeaderMobile/>}
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/intro' element={<IntroCompanyPage/>}/>
            <Route path='/road' element={<RoadPage/>}/>
            <Route path='/products' element={<ProductPage/>}/>
            <Route path='/products/:id' element={<ProductDetailPage/>}/>
            <Route path='/truck' element={<DongeuiEndPPage/>}/>
          </Routes>
      </>
  );
}

export default App;