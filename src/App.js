import React, { useState, useEffect, Fragment } from "react";

import Header from "./components/Layout/Header";

import ProductDetail from "./components/Products/ProductDetail";
import ProductList from "./components/Products/ProductList";

const divStyle = {
  display: "flex",
  alignItems: "center",
};

function App() {
  const [productList, setProductList] = useState([]);
  const [productDetail, setProductDetail] = useState({});
  const [productDetailIsShown, setProductDetailIsShown] = useState(false);

  const showProductDetailHandler = (product) => {
    if (productDetailIsShown) {
      setProductDetailIsShown(false);
      if (productDetail !== product) {
        setProductDetailIsShown(true);
        setProductDetail(product);
      } else {
        setProductDetail(null);
      }
    } else {
      setProductDetailIsShown(true);
      setProductDetail(product);
    }
  };

  useEffect(() => {
    fetch("http://fakestoreapi.com/products?limit=5")
      .then((response) => response.json())
      .then((json) => {
        setProductList(json);
      });
  }, []);

  return (
    <Fragment>
      <Header />
      <div className="parent">
        <div class="child">
          <ProductList
            products={productList}
            onShowProductDetail={showProductDetailHandler}
          />
        </div>
        <div class="child">
          {productDetailIsShown && <ProductDetail product={productDetail} />}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
