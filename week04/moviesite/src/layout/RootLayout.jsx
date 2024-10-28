import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const RootLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; // 화면 전체를 채우도록 설정
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`;

const RootLayout = () => {
  return (
    <RootLayoutContainer>
      <Navbar />
      <MainContent>
        <Sidebar />
        <Outlet />
      </MainContent>
    </RootLayoutContainer>
  );
};

export default RootLayout;
