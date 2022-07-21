import React,{ useState } from 'react'
import styled from 'styled-components';
import Image from '../Assets/image-product-1.jpg'
import Img1 from '../Assets/image-product-1-thumbnail.jpg'
import Img2 from '../Assets/image-product-2-thumbnail.jpg'
import Img3 from '../Assets/image-product-3-thumbnail.jpg'
import Img4 from '../Assets/image-product-4-thumbnail.jpg'



const GridTemplateCol = styled.div`
  padding:8rem 0;
  margin:0 auto;
  max-width:1024px;
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:4rem;
`;
const ImgFluid = styled.img`
  width:100%;
  border-radius:1rem;
`;
const SmallImgFluid = styled.img`
  width:20%;
  border-radius:1rem;
`;
const FlexDirection = styled.div`
  margin-top:2rem;
  display:flex;
  flex-direction:row;
  gap:1rem
`;
const data = [
  {
    id: "1",
    key: "1",
    mainImg:require('../Assets/image-product-1.jpg'),
    img: require('../Assets/image-product-1-thumbnail.jpg')
  },
  {
    id: "2",
    key: "2",
    mainImg: require('../Assets/image-product-2.jpg'),
    img: require('../Assets/image-product-2-thumbnail.jpg')
  },
  {
    id: "3",
    key: "3",
    mainImg:require('../Assets/image-product-3.jpg'),
    img: require('../Assets/image-product-3-thumbnail.jpg')
  },
  {
    id: "4",
    key: "4",
    mainImg:require('../Assets/image-product-4.jpg'),
    img: require('../Assets/image-product-4-thumbnail.jpg')
  },
];
function Product() {
  const [toggle, setToggle] = useState("1");
  {data.map(({ mainImg, key, img }) => {
  return (
    <section>
     <GridTemplateCol>
       <div>
        <ImgFluid src={Image} className="img"/>
      <FlexDirection>
          <SmallImgFluid src={Img1} className="img"/>
          <SmallImgFluid src={Img2} className="img"/>
          <SmallImgFluid src={Img3} className="img"/>
          <SmallImgFluid src={Img4} className="img"/>
       </FlexDirection>
       </div>
       <div>
        Texbox
       </div>
     </GridTemplateCol>
    </section>
  )
})}
}

export default Product