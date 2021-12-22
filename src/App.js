import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LayoutNavBar from './Layouts/LayoutNavBar';
import Home from './pages/Home';
import ItemDetail from './pages/ItemDetail';
import Basket from './pages/Basket'

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          basketItems : new Map(),
          amount: 0,
          basketActive: false,
      }
  }
  handleRemoveItem = (e) => {        
      const idAvocado = e.currentTarget.getAttribute('data-id')
      const avocado = this.getAvocado(idAvocado)
      if (avocado.amount === 1) {
          const { basketItems } = this.state
          basketItems.delete(idAvocado)
          this.setState(Object.assign(this.state, { basketItems, amount: 0 }))
          localStorage.removeItem(idAvocado)
      }
      else this.degreaseAmount(idAvocado)
  }
  degreaseAmount(idAvocado) {
      const { basketItems } = this.state
      const avocado = basketItems.get(idAvocado)
      avocado.amount = avocado.amount - 1
      basketItems.set(idAvocado, avocado)
      this.setState(Object.assign(this.state, { basketItems, amount: avocado.amount}))
      localStorage.setItem(avocado.id, JSON.stringify(avocado))
  }
  getAvocado(id) {
      const avocado = this.state.basketItems.get(id)
      if (avocado && avocado === undefined && avocado === null) return undefined
      return avocado
      
  }
  getDataFromStorage = () => {
      const basketItems = new Map()
      let amount = 0
      for (let i = 0; i < localStorage.length; i++) {
          const id = localStorage.key(i)
          let avocado = localStorage.getItem(id)
          avocado = JSON.parse(avocado)
          amount = amount + avocado.amount
          basketItems.set(id, avocado)
      }
      console.log('basketItems', basketItems)
      if (basketItems.size > 0) this.setState(Object.assign(this.state, { basketItems, amount }))
  }
  handleIncreaseAmount = (amount) => {
    const resultAmount = this.state.amount + amount
    this.setState(Object.assign(this.state, { amount: resultAmount }))

  }
  handleBasketIconActive = ({ target }) => {
    const id = target.id
    if (id === 'basket') this.setState(Object.assign(this.state, { basketActive: true }))
    else this.setState(Object.assign(this.state, { basketActive: false }))
  }
  render() {
    return (
      <Router>
        <LayoutNavBar  
          basketIconActive={this.state.basketActive}
          amountBasket={this.state.amount}
          onBasketIconActive={this.handleBasketIconActive}
        >
          <Switch>
            <Route path="/details/:id">
              <ItemDetail onIncreaseAmount={this.handleIncreaseAmount}/>
            </Route>
            <Route path="/basket">
              <Basket 
                basketItems={this.state.basketItems} 
                onRemoveItem={this.handleRemoveItem} 
                getDataFromStorage={this.getDataFromStorage}
              />
            </Route>
            <Route path="/">
              <Home getDataFromStorage={this.getDataFromStorage} />
            </Route>
          </Switch>
        </LayoutNavBar>
      </Router>
  
    ); 
  }
}

export default App;