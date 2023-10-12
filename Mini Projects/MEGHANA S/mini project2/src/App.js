import React, {
	useState,
	useEffect,
} from "react";
import "./style/main.css";
import { GiShoppingBag } from "react-icons/gi";
import RatingStars from "./components/RatingStars";
import ShoppingCart from "./components/ShoppingCart";

const products = [
	{
		id: 1,
		name: "Oppo A57",
		rating: 4.3,
		description:
			" A57 comes with 13MP + 2MP dual camera setup.the device sports 8MP Front Camera with 360 degree fill light.",
		price: 10000,
		image: require("./assets/image/ima 1.jpeg"),
	},
	{
		id: 2,
		name: "Barbie doll",
		rating: 4.2,
		description:
			"Barbie is a fashion doll created by American businesswoman Ruth Handler, manufactured by American The toy is the figurehead of the Barbie brand that includes a range of fashion dolls and accessories..",
		price: 200,
		image: require("./assets/image/ima 2.jpeg"),
	},
	{
		id: 3,
		name: "Nikon D3500",
		rating: 3.2,
		description:
			"The Nikon D3500 is a 24 Megapixel entry-level DSLR with an APS-C CMOS sensor, that is cheaper, lighter, and has a longer battery life than the D3400 that it replaced.",
		price: 50000,
		image: require("./assets/image/ima 3.jpeg"),
	},
	{
		id: 4,
		name: "Daniel Jubile",
		rating: 4.8,
		description:
			"World's One Of The Best Indian Movement And Battery Helps To Run The Watch For Months & Months. Daniel Jubile Crafted From A Rich Quality Material, This Watch For Men And Women ....",
		price: 5000,
		image: require("./assets/image/ima 5.webp"),
	},
	{
		id: 5,
		name: "Samsung T4340",
		rating: 4.5,
		description:
			" the brand's latest and greatest 4K TV, and it offers the most impressive brightness, color, and gaming performance we've seen on an OLED. .",
		price: 25000,
		image: require("./assets/image/ima 6.webp"),
	},
	{
		id: 6,
		name: "Aqualite Super Comfortable",
		rating: 3.8,
		description:
			"While wearing Aqualite Clogs, you can rest assured that you will not trip and fall. These footwear have an anti-skid design to help you walk with confidence. Must buy!",
		price: 149,
		image: require("./assets/image/ima 7.jpg"),
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

