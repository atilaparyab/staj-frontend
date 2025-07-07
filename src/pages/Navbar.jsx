import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; 



export default function Navbar() {
  return (
    <nav className="navbar">
      
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        <Link to="/">DataCortex</Link>
      </div>

      
      <div>
        <Link to="/">Anasayfa</Link>
        <Link to="/veri-kumeleri">Veri Kümeleri</Link>
        <Link to="/konular">Konular</Link>
        <Link to="/discussions">Tartışmalar</Link>
        <Link to="/about">Hakkımızda</Link>
        
      </div>

      
      <div>
        <Link to="/signup">Kayıt ol</Link>
        <Link to="/login">Giriş Yap</Link>
      </div>
    </nav>
  );
}

