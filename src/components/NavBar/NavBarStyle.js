import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  padding: 25px;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #fcba03
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 5px;
`;

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
