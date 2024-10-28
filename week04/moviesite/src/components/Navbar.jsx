import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(19, 21, 23);
  height: 80px;
  padding-left: 30px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    height: auto;
  }
`;

const NavButton = styled(Link)`
  &:hover {
    filter: brightness(0.5);
  }
  transition: filter 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 5px;
  width: 70px;
  height: 30px;
  color: white;
  background-color: ${(props) => props.color || "rgb(19,21,23)"};
`;

const NavButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const NavLogo = styled(Link)`
  font-size: 25px;
  font-weight: bold;
  color: rgb(253, 4, 91);
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavLogo to={"/"}>@HYWZNN</NavLogo>
      <NavButtonContainer>
        <NavButton color={"rgb(19,21,23)"} to="/login">
          로그인
        </NavButton>
        <NavButton color={"rgb(253,4,91)"} to="/signup">
          회원가입
        </NavButton>
      </NavButtonContainer>
    </NavbarContainer>
  );
};

export default Navbar;
