import React,{ useState } from 'react'
import styled from "styled-components";


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

function ProductCard(_props) {
  const [toggle, setToggle] = useState("1");
  return (
    <>
        <GridTemplateCol>
          <div>
            <ImgFluid src={_props.ImageUrl}/>
            <FlexDirection>
              <SmallImgFluid src={_props.smallImg} key={_props.key}/>
              <SmallImgFluid src={_props.smallImg} />
              <SmallImgFluid src={_props.smallImg} />
              <SmallImgFluid src={_props.smallImg} />
            </FlexDirection>
          </div>
          <div>
            <p>text</p>
          </div>
        </GridTemplateCol>
    </>
  );
}

export default ProductCard