/*  import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import ProductManagement from './components/ProductManagement';
 import ShoppingCart from './components/ShoppingCart';
import { UsersList } from './components/UserList';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' exact element={<Home/>}/>
         
        <Route path='/ProductManagement'  element={<ProductManagement/>}/> 
        
        <Route path='/UsersList'  element={<UsersList/>}/>

        <Route path='/ShoppingCart'  element={<ShoppingCart/>}/>
       
      </Routes>

    </div>
  );
}

export default App; */
 



import React, {
	useState,
	useEffect,
} from "react";
import "./style/main.css";
import { GiShoppingBag } from "react-icons/gi";

import ShoppingCart from "./components/ShoppingCart";

const products = [
	{
		id: 1,
		
		image: require("./assets/pics/chu.png"),
	},
	{
		id: 2,
		
		image: require("./assets/pics/hoodie.png"),
	},
	{
		id: 3,
		
		image: require("./assets/pics/saree.png"),
	},
	{
		id: 4,
		
		image: require("./assets/pics/tracks.png"),
	},
	{
		id: 5,
		 
		
		image: require("./assets/pics/shirts.png"),
	},
	{
		id: 6,
		
		image: require("./assets/pics/pants.png"),
	},
];

function App() {
	const [cartsVisibilty, setCartVisible] =
		useState(false);
	const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
	useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);
	const addProductToCart = (product) => {
		const newProduct = {
			...product,
			count: 1,
		};
		setProducts([
			...productsInCart,
			newProduct,
		]);
	};

	const onQuantityChange = (
		productId,
		count
	) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === productId
				);
			if (productsIndex !== -1) {
				oldState[productsIndex].count =
					count;
			}
			return [...oldState];
		});
	};

	const onProductRemove = (product) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === product.id
				);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});
	};

	return (
		<div className="App">
			<ShoppingCart
				visibilty={cartsVisibilty}
				products={productsInCart}
				onClose={() =>
					setCartVisible(false)
				}
				onQuantityChange={
					onQuantityChange
				}
				onProductRemove={onProductRemove}
			/>
			<div className="navbar">
				<h3 className="logo">Logo</h3>
				<button
					className="btn shopping-cart-btn"
					onClick={() =>
						setCartVisible(true)
					}>
					<GiShoppingBag size={24} />
					{productsInCart.length >
						0 && (
						<span className="product-count">
							{
								productsInCart.length
							}
						</span>
					)}
				</button>
			</div>
			<main>
				<h2 className="title">
					Products
				</h2>
				<div className="products">
					{products.map((product) => (
						<div
							className="product"
							key={product.id}>
							<img
								className="product-image"
								src={
									product.image
								}
								alt={
									product.image
								}
							/>
							<h4 className="product-name">
								{product.name}
							</h4>
							
							<p>
								{
									product.description
								}
							</p> }
						{ 	<span className="product-price">
								{product.price}
						</span> }
							<div className="buttons">
								{/* <button className="btn">
									Detail
								</button> */}
								<button
									className="btn"
									onClick={() =>
										addProductToCart(
											product
										)
									}>
									Add to cart
								</button>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}

export default App;