import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import MainPage from "./MainPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import MainPageLog from "./MainPageLog";
import SearchPage from "./SearchPage";
import LodgingDetail from "./LodgingDetail";
import LodgingDetailLog from "./LodgingDetailLog";
import { Global } from "@emotion/react";
import { global } from "../styles/global";
import SelectPage from "./SelectPage";

const App = () => {
  return (
    <>
      <Global styles={global} />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/mainPage/Log" element={<MainPageLog />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/selectPage" element={<SelectPage />} />
          <Route path="/searchPage" element={<SearchPage />} />
          <Route path="/lodgingDetail" element={<LodgingDetail />} />
          <Route path="/lodgingDetail/Log" element={<LodgingDetailLog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
