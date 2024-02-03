import './App.css'
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import CardList from "./components/CardList.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import MainPage from "./components/MainPage.tsx";
import RootLayout from "./components/RootLayout.tsx";
import Login from "./components/Login.tsx";
import {AnimatePresence} from "framer-motion";
import Navbar from "./components/Navbar.tsx";

//TODO: Animation will be rework fr

function App() {
    const location = useLocation();
  return (
      <>
          <Navbar />
          <AnimatePresence mode="wait">
              <Routes key={location.pathname} location={location}>
                  <Route path="/" element={<RootLayout />}>
                      <Route key="main" index element={<MainPage />} />
                      <Route key="game" path="game" element={<CardList />} />
                      <Route key="reg" path="register" element={<Login />} />
                  </Route>
                  <Route path="*" element={<ErrorPage />}/>
              </Routes>
          </AnimatePresence>
      </>
  )
}

export default App
