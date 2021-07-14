import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { Template } from './components/MainComponents';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import './App.css';

function App() {

  const dispatch = useDispatch();

  const name = useSelector(state => state.UserReducer.name);

  const handleDefault = () => {
    dispatch({
      type: 'SET_NAME',
      payload: {
        name: 'Teste'
      }
    });
  }

  return (
    <BrowserRouter>
      <Template>
        <Header />
          <Routes />
        <Footer />
      </Template>
    </BrowserRouter>
  );
}

export default App;
