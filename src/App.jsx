import { useState } from "react";

import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Featured from "./components/Featured";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Faq from "./components/Faq";
import Error from "./components/Error";
import Singleproduct from "./components/Singleproduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="Featured" element={<Featured />} />
            <Route path="Faq" element={<Faq />} />
            <Route path="Shop" element={<Shop />} />
            <Route path="/product/:id" element={<Singleproduct />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
