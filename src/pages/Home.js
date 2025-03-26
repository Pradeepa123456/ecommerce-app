import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCards";
import "../styles/_products.scss";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="home">
      <input type="text" placeholder="Search products..." onChange={(e) => setSearchTerm(e.target.value)} />
      <div className="product-list">
        {products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default Home;
