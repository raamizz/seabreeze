import logo from "./logo.svg";
import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import "./App.css";

import Header from "./components/navbar/Header";
import About from "./components/landing/About";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Suspense>
                  <About />
                </Suspense>
              </>
            }
          />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
