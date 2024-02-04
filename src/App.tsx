import './App.css'
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import CardList from "./components/CardList.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import MainPage from "./components/MainPage.tsx";
import RootLayout from "./components/RootLayout.tsx";
import Login from "./components/Login.tsx";
import {AnimatePresence} from "framer-motion";
import Navbar from "./components/Navbar.tsx";
import Idea from "./components/Idea.tsx";
import AboutUs from "./components/AboutUs.tsx";
import UsedTech from "./components/UsedTech.tsx";

function App() {
    const location = useLocation();
  return (
      <>
          <Navbar />
          <AnimatePresence mode="wait">
              <Routes key={location.pathname} location={location}>
                  <Route path="/" element={<RootLayout />}>
                      <Route key="main" index element={<MainPage />} />
                      <Route key="Idea" path="idea" element={<Idea />} />
                      <Route key="game" path="game" element={<CardList />} />
                      <Route key="reg" path="register" element={<Login />} />
                      <Route key="about" path="about" element={<AboutUs />}/>
                      <Route key="tech" path="tech" element={<UsedTech />} />
                  </Route>
                  <Route path="*" element={<ErrorPage />}/>
              </Routes>
          </AnimatePresence>
      </>
  )
}

export default App
