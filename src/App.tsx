import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CardList from "./components/CardList.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import MainPage from "./components/MainPage.tsx";
import RootLayout from "./components/RootLayout.tsx";
import Login from "./components/Login.tsx";



function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<MainPage />} />
                <Route path="game" element={<CardList />} />
                <Route path="register" element={<Login />} />
            </Route>
            <Route path="*" element={<ErrorPage />}/>
        </Routes>
    </Router>
  )
}

export default App
