import styled from "styled-components";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/about">About</StyledNavLink>
      <StyledNavLink to="/product">Product</StyledNavLink>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;

const StyledNavLink = styled(NavLink)`
  padding: 1rem;
  &.active {
    color: tomato;
    font-weight: bold;
  }
`;
