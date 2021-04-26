import React, {useEffect, useState } from "react";
import axios from "axios";

interface IProduct {
  id: number;
  imageUrl: string;
  name: string;
  brand: string;
  price: number;
  rating: number;
}

const emptyProducts: IProduct[] = [];
function Products() {

  const [products, setProducts]: [
    IProduct[],
    (products: IProduct[]) => void
  ] = useState(emptyProducts);

  useEffect(() => {
    axios
      .get<IProduct[]>("https://localhost:5001/catalog",{
          headers: {
              "Content-Type": "appl;ication/json",
          },
      })
      .then((response) => setProducts(response.data));
  }, []);

    return (
    <div className="content">
    <ul className="products">
      {
        products.map((product) => (
          <li key={product.id}>
            <div className="product">
              <img className="product-image" src={product.imageUrl} alt="product" />
              <div className="product-name">
                <a href="product.html">{product.name}</a>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">${product.price}</div>

              {/* <div className="product.rating">{product.rating} Stars ({product.numberOfReviews} Reviews)</div> */}
            </div>
          </li>
        ))}
    </ul>
  </div>
    );
}
export default Products;