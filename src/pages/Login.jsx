import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Giriş bilgileri:", { email, password });

    alert("Giriş başarılı! Anasayfaya yönlendiriliyorsunuz...");
    navigate("/");
  };

  const goToRegister = () => {
    navigate("/Signup"); 
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2 style={{ color: "black", textAlign: "center" }}>Giriş Yap</h2>
        <form onSubmit={handleLogin} style={formStyle}>
          <input
            type="email"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#333333"; 
              e.target.style.color = "#fff"; 
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#cccccc"; 
              e.target.style.color = "#000"; 
            }}
          >
            Giriş Yap
          </button>
        </form>

        
        <p style={registerTextStyle}>
          Hesabın yok mu?{" "}
          <span onClick={goToRegister} style={registerLinkStyle}>
            Kayıt Ol
          </span>
        </p>
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "calc(100vh - 60px)", 
  backgroundColor:"#f7f7f7",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
};



const containerStyle = {
  maxWidth: "400px",
  width: "100%",
  padding: "20px",
  backgroundColor:"#f7f7f7",
  borderRadius: "8px",
  boxShadow: "0 0 15px rgba(113, 112, 112, 0.1)",
  textAlign: "center",
};


const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};


const inputStyle = {
  padding: "10px",
  fontSize: "1rem",
  borderRadius: "4px",
  border: "1px solid #fff",
  backgroundColor: "#fff",
  color: "black",
};


const buttonStyle = {
   padding: "12px",
  fontSize: "1rem",
  backgroundColor: "#cccccc",
  color: "black",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "all 0.3s ease",
};

const registerTextStyle = {
  marginTop: "15px",
  color: "#ccc",
};

const registerLinkStyle = {
  color: "#000000",
  fontWeight: "bold",
  cursor: "pointer",
  textDecoration: "underline",
  transition: "color 0.3s ease",
};




