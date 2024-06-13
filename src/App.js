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

              <div className="text-2xl">
                landing PAGEE
              </div>
            </Suspense>
            </>
           }
           />
           

      


        </Routes>
      </Router>
    </div>
  );
}

export default App;
