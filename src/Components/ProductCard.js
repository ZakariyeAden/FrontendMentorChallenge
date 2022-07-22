import React from 'react'
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
  return (
    <div>
        <GridTemplateCol>
          <div>
            <ImgFluid src={_props.ImageUrl}/>
            <FlexDirection>
              <SmallImgFluid src={_props.ImageSmUrl} />
              <SmallImgFluid src={_props.ImageSmUrl} />
              <SmallImgFluid src={_props.ImageSmUrl} />
              <SmallImgFluid src={_props.ImageSmUrl} />
            </FlexDirection>
          </div>
          <div>Texbox</div>
        </GridTemplateCol>
    </div>
  )
}

export default ProductCard