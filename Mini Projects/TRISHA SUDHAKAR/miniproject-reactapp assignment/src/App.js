import React, {
	useState,
	useEffect,
} from "react";
import "./style/main.css";
import { Carousel } from "react-responsive-carousel"; // Import Carousel component
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import Carousel styles
import { GiShoppingBag } from "react-icons/gi";
import RatingStars from "./components/RatingStars";
import ShoppingCart from "./components/ShoppingCart";
import OfferCarousel from "./components/OfferCarousel";

const products = [
	{
		id: 1,
		name: "Hatsune",
		rating: 4.2,
		description:
			"The Hatsune Toy is a delightful and interactive figurine inspired by the popular virtual singer and cultural icon, Hatsune Miku.",
		price: 199,
		image: require("./assets/images/hatsune.jpg"),
	},
	{
		id: 2,
		name: "Naruto",
		rating: 4.2,
		description:
			"The Naruto Uzumaki Action Figure is a must-have collectible for fans of the beloved anime and manga series",
		price: 229,
		image: require("./assets/images/naruto.jpg"),
	},
	{
		id: 3,
		name: "Izumi-Konata",
		rating: 3.2,
		description:
			"The Izumi Konata Nendoroid Figure is a delightful collectible that pays tribute to the beloved character from the anime and manga series ",
		price: 99,
		image: require("./assets/images/Izumi-Konata-.jpg"),
	},
	{
		id: 4,
		name: "action figure",
		rating: 4.8,
		description:
			"The Heroic Guardian Action Figure is an exciting and dynamic collectible that embodies the spirit of bravery and adventure.",
		price: 119,
		image: require("./assets/images/action figure.jpg"),
	},
	{
		id: 5,
		name: "demon slayer",
		rating: 4.5,
		description:
			"The Demon Slayer: Kimetsu no Yaiba Collectible Figure brings the captivating world of demon slaying to life in a stunning designed form..",
		price: 85,
		image: require("./assets/images/demon slayer.jpg"),
	},
	{
		id: 6,
		name: "ichigo toy",
		rating: 3.8,
		description:
			" The Ichigo Kurosaki Anime Collectible Figure celebrates the captivating protagonist of the renowned anime and manga series, ",
		price: 149,
		image: require("./assets/images/ichigo toy.jpg"),
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
				
				<h3 className="logo">Anime Toys</h3>
				<ul className="nav-list">
    <li className="nav-item"> <b>   Home</b></li>
    <li className="nav-item"><b>Products</b></li>
    <li className="nav-item"><b>Offers</b></li>
    <li className="nav-item"><b>Contact</b></li>
  </ul>
				
				
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
			<div><main>
    
        <OfferCarousel /> {/* Use the OfferCarousel component */}
        
      </main>
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
							<RatingStars
								rating={
									product.rating
								}
							/>
							<p>
								{
									product.description
								}
							</p>
							<span className="product-price">
								{product.price}$
							</span>
							<div className="buttons">
								<button className="btn">
									Detail
								</button>
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
