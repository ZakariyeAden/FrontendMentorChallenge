import React, { useState } from "react";
import styled from "styled-components";
import Image from "../Assets/image-product-1.jpg";
import Img1 from "../Assets/image-product-1-thumbnail.jpg";
import Img2 from "../Assets/image-product-2-thumbnail.jpg";
import Img3 from "../Assets/image-product-3-thumbnail.jpg";
import Img4 from "../Assets/image-product-4-thumbnail.jpg";

const GridTemplateCol = styled.div`
  padding: 8rem 0;
  margin: 0 auto;
  max-width: 1024px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
`;
const ImgFluid = styled.img`
  width: 100%;
  border-radius: 1rem;
`;
const SmallImgFluid = styled.img`
  width: 20%;
  border-radius: 1rem;
`;
const FlexDirection = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const data = [
  {
    id: "1",
    key: "1",
    main: "../Assets/image-product-1.jpg",
    img: "../Assets/image-product-1-thumbnail.jpg",
    text:"hello"
  },
  {
    id: "2",
    key: "2",
    main: "../Assets/image-product-2.jpg",
    img: "../Assets/image-product-2-thumbnail.jpg",
    text:"hello"
  },
  {
    id: "3",
    key: "3",
    main: "../Assets/image-product-3.jpg",
    img: "../Assets/image-product-3-thumbnail.jpg",
    text:"hello"
  },
  {
    id: "4",
    key: "4",
    main: "../Assets/image-product-4.jpg",
    img: "../Assets/image-product-4-thumbnail.jpg",
    text:"hello"
  },
];
function Product() {
  const [toggle, setToggle] = useState("1");
  data.map(({ main, key, img, text }) => 
  {
    return (
      <section>
        <GridTemplateCol>
          <div>
          {main}
          <p>{text}</p>
            <ImgFluid src={main} />
            <FlexDirection>
              <SmallImgFluid src={Img1} />
              <SmallImgFluid src={Img2} />
              <SmallImgFluid src={Img3} />
              <SmallImgFluid src={Img4} />
            </FlexDirection>
          </div>
          <div>Texbox</div>
        </GridTemplateCol>
      </section>
    );
  });
}

export default Product;
