import React from 'react';
import './App.css';
import CardItemList from './components/CartItemList';
import NavBar from './components/NavBar';

function App() {
  return (
    <React.Fragment>
      <NavBar basketIconActive={true}/>
      <div className="cardList">
        <CardItemList/>
        <CardItemList/>
        <CardItemList/>
        <CardItemList/>
        <CardItemList/>
      </div>
    </React.Fragment>
  );
}

export default App;