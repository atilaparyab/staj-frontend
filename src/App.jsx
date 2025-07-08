import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Signup from "./pages/Kayitol";
import Login from "./pages/Login";
import DatasetsPage from "./pages/DatasetsPage";
import NewDatasetPage from "./pages/NewDatasetPage"; 
import DatasetDetail from "./pages/DatasetDetail";
import AboutPage from "./pages/AboutPage";

function AppContent() {
  const location = useLocation();

  // Sadece Navbar'ı gizlemek istediğin sayfalar
  const hideNavbarRoutes = ["/veri-kumeleri"];

  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/veri-kumeleri" element={<DatasetsPage />} />
        <Route path="/datasets/new" element={<NewDatasetPage />} />
        <Route path="/datasets/:id" element={<DatasetDetail />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;


