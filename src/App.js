import './App.css';
import CardItemList from './components/CartItemList';

function App() {
  return (
    <div className="avoApp">
      <div className="cardList">
        <CardItemList/>
        <CardItemList/>
        <CardItemList/>
        <CardItemList/>
        <CardItemList/>
      </div>
    </div>
  );
}

export default App;
