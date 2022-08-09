import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import ShopState from "./contexts/shopContext";
import Shop from "./routes/shop";
import Products from "./routes/products";
import About from "./routes/about";
import Service from "./routes/service";
import Partner from "./routes/partner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="shop" element={<Shop />}>
                <Route index element={<Products />} />
              </Route>
              <Route
                path="*"
                element={
                  <main>
                    <p>Извините, страница не найдена.</p>
                  </main>
                }
              />
              <Route path="about" element={<About />} />
              <Route path="service" element={<Service />} />
              <Route path="partner" element={<Partner />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </ShopState>
  </React.StrictMode>
);
