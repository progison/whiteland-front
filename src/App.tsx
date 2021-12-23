import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
// import VKAuthModal from "./components/VKAuthModal";
import MainPage from "./pages/MainPage";
import RulesPage from "./pages/RulesPage";
import StaffPage from "./pages/StaffPage";
import VKOpenApi from "./vk/VKOpenApi";
import VKUser from "./vk/VKUser";

export default function App() {
  const [pageName, setPageName] = useState("");
  const [user, setUser] = useState<VKUser | undefined>();
  // const [VKAuthModalShow, setVKAuthModalShow] = useState(false);
  // const VKAuthModalHandleShow = () => setVKAuthModalShow(true);
  // const VKAuthModalHandleClose = () => setVKAuthModalShow(false);

  useEffect(() => {
    let title = "WhiteLand";

    if (pageName !== "") {
      title += " | " + pageName;
    }

    document.title = title;
  }, [pageName]);

  const changePageName = (pageName: string) => {
    setPageName(pageName);
  };

  const [VK, setVK] = useState<VKOpenApi | undefined>();

  useEffect(() => {
    const VK: VKOpenApi | undefined = (window as any).VK;

    if (VK !== undefined && process.env.REACT_APP_VK_APP_ID) {
      VK.init({
        apiId: Number.parseInt(process.env.REACT_APP_VK_APP_ID),
        status: false,
        onlyWidgets: false,
      });
      setVK(VK);
    }
  }, []);

  // useEffect(() => {
  //   const userRaw = window.localStorage.getItem("VKUser");

  //   if (userRaw) {
  //     try {
  //       const user: VKUser = JSON.parse(userRaw);
  //       setUser(user);
  //     } catch (err) {
  //       window.localStorage.removeItem("VKUser");
  //       console.error(err);
  //     }
  //   }
  // }, []);

  const VKLogin = () => {
    if (VK) {
      VK.Auth.login((auth) => {
        console.log(auth);
      }, 1 << 10);
    }
  };

  // const handleVKUser = (user: VKUser) => {
  //   setUser(user);
  //   window.localStorage.setItem("VKUser", JSON.stringify(user));
  // };

  return (
    <>
      <Header user={user} VKLogin={VKLogin}></Header>
      <Container fluid className="page-content">
        <Routes>
          <Route
            path="/staff"
            element={<StaffPage changePageName={changePageName}></StaffPage>}
          ></Route>
          <Route
            path="/rules"
            element={<RulesPage changePageName={changePageName}></RulesPage>}
          ></Route>
          <Route
            path="*"
            element={<MainPage changePageName={changePageName}></MainPage>}
          ></Route>
        </Routes>
      </Container>
      {/* <VKAuthModal
        show={VKAuthModalShow}
        handleClose={VKAuthModalHandleClose}
        handleUser={handleVKUser}
      ></VKAuthModal> */}
    </>
  );
}
