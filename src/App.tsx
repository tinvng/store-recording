import React from 'react';
import './App.css'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

const App: React.FC = () => {
	return (
		<>
			<Header />

			<Switch>
				<Route exact path='/' component={ProductList}/>
				<Route path='/details' component={Details}/>
				<Route path='/cart' component={Cart}/>
				<Route component={Default}/>
			</Switch>
		</>
	);
}

export default App;
