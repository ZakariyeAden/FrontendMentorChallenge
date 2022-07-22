import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Image1 from "../Assets/image-product-1.jpg";
import Image2 from "../Assets/image-product-2.jpg";
import Image3 from "../Assets/image-product-3.jpg";
import Image4 from "../Assets/image-product-4.jpg";
import thumbNail1 from "../Assets/image-product-1-thumbnail.jpg";
import thumbNail2 from "../Assets/image-product-2-thumbnail.jpg";
import thumbNail3 from "../Assets/image-product-3-thumbnail.jpg";
import thumbNail4 from "../Assets/image-product-4-thumbnail.jpg";

const data = [
  {
    id: 1,
    key: 1,
    mainImg: Image1,
    smallImg: thumbNail1,
  },
  {
    id: 2,
    key: 2,
    mainImg: Image2,
    smallImg: thumbNail2,
  },
  {
    id: 3,
    key: 3,
    mainImg: Image3,
    smallImg: thumbNail3,
  },
  {
    id: 4,
    key: 4,
    mainImg: Image4,
    smallImg: thumbNail4,
  },
];

 function Product(_props) {
    // {data.map(({ mainImg,smallImg }) => {
      return (
        <section>
      <ProductCard ImageUrl={Image1} ImageSmUrl={thumbNail1}/>
    </section>
  );
// })};
}


export default Product;
