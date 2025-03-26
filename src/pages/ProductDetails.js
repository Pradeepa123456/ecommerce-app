import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { useCart } from "../context/CartContext";
import axios from "axios";
import "../styles/_products.scss";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate(); // ✅ Initialize useNavigate()
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product); // ✅ Add product to cart
    alert("Item added to cart! Redirecting to Cart Page..."); // ✅ Show confirmation
    navigate("/cart"); // ✅ Redirect to cart page
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button> {/* ✅ Call function onClick */}
    </div>
  );
};

export default ProductDetails;
