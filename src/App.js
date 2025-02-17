import React from "react";
import "./App.c s";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme.js";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CategoryCarousel from "./components/CategoryCarousel";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import ComposeScoopPage from "./ComposeScoopPage.js";
import Signinform from "./pages/SignInForm.js";
import AccountManagementPage from "./components/AccountManagementPage.js";
import Signup from "./pages/Signup.jsx";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <CategoryCarousel />
                    <Navbar />
                    <Home />
                    <Footer />
                  </>
                }
              />
              <Route path="*" element={<NotFound></NotFound>} />
              <Route path="" element={<Signinform></Signinform>} />

              <Route path="/signup" element={<Signup />} />
              <Route path="/account" element={<AccountManagementPage />} />
            </Routes>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
