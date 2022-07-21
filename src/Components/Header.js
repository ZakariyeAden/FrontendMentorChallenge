import React from "react";
import styled from "styled-components";
import ProfileImg from '../Assets/image-avatar.png'

const NavStyle = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items:center;
  list-style:none;
  gap: 1rem;
  font-size:1rem;
  margin: 1rem 0 0 5rem;
  max-width:1024px;
`;
const Nav = styled.nav`
  display:flex;
  justify-content: space-around;
`;
const CompanyName = styled.li`
  font-weight:700;
  font-size:2rem;
  text-transform:lowercase;
  margin-right:2rem;
`;
const LinksStyle = styled.li`
  color:hsl(219, 9%, 45%);
`;
const Container = styled.div`
  display:flex;
  justify-content:flex-end;
  align-items:center;
  gap:2rem;
`;
const ProfileImgWidth = styled.img`
  width:30%;
`;

function Header() {
  return (
    <header>
      <Nav>
        <NavStyle>
          <CompanyName>Sneakers</CompanyName>
          <LinksStyle>Collections</LinksStyle>
          <LinksStyle>Men</LinksStyle>
          <LinksStyle>Women</LinksStyle>
          <LinksStyle>About</LinksStyle>
          <LinksStyle>Contact</LinksStyle>
        </NavStyle>
        <Container>
        <svg width="22" className="align-center" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
        <ProfileImgWidth src={ProfileImg} />
        </Container>
      </Nav>
    </header>
  );
}

export default Header;
