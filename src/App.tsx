import './App.css'
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import CardList from "./components/game-components/CardList.tsx";
import ErrorPage from "./components/pages/ErrorPage.tsx";
import MainPage from "./components/pages/MainPage.tsx";
import RootLayout from "./components/RootLayout.tsx";
import {AnimatePresence} from "framer-motion";
import Navbar from "./components/Navbar.tsx";
import Idea from "./components/pages/Idea.tsx";
import AboutUs from "./components/pages/AboutUs.tsx";
import UsedTech from "./components/pages/UsedTech.tsx";
import Layout from "./components/pages/auth/Layout.tsx";
import LobbyList from "./components/game-components/LobbyList.tsx";

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
                      <Route key="lobby" path="lobby" element={<LobbyList />} />
                      <Route key="reg" path="register" element={<Layout />} />
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
