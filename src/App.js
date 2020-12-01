import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import './App.less'

const App = () => {
    return (
        <div className="container">
            <Header />
            <ProductList />
        </div>
    )
}

export default App
