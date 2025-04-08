import "@fontsource/inter"; 
import "@fontsource/inter/500.css"; 
import "@fontsource/inter/600.css"; 
import "@fontsource/inter/700.css"; 
import "./style/global.css";
import "./style/reset.css";

import {Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Bascet } from "./components";
import { Home, Favorites, Orders } from "./pages";

export default function App() {
  return (
    <Router>
      <Header />
      <Suspense>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/favorites"
          element={
            <>
              <Favorites />
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Orders />
            </>
          }
        />
      </Routes>
      </Suspense>
      <Bascet />
          
    </Router>
  );
}
