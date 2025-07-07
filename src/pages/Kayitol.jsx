import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    console.log("Kayıt bilgileri:", { name, email, password });

    alert("Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz...");
    navigate("/login");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        <h2 style={{ color: "black", textAlign: "center" }}>Kayıt Ol</h2>
        <form onSubmit={handleSignup} style={formStyle}>
          <input
            type="text"
            placeholder="Ad Soyad"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />
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
              e.target.style.color = "#ffffff"; 
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#cccccc"; 
              e.target.style.color = "#000000"; 
            }}
          >
            Kayıt Ol
          </button>
        </form>

        
        <div style={loginTextWrapperStyle}>
          <p style={loginTextStyle}>
            Zaten hesabın var mı?{" "}
            <span onClick={goToLogin} style={loginLinkStyle}>
              Giriş Yap
            </span>
          </p>
        </div>
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
  width: "100%",
  maxWidth: "400px",
  padding: "30px",
   backgroundColor:"#f7f7f7",
  borderRadius: "8px",
  boxShadow: "0 0 15px rgba(113, 112, 112, 0.1)",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
};

const inputStyle = {
  padding: "12px",
  fontSize: "1rem",
  borderRadius: "4px",
  border: "1px solid #fff",
  backgroundColor: "#fff",
  color: "black",
  outline: "none",
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

const loginTextWrapperStyle = {
  textAlign: "center", 
  marginTop: "15px",
};

const loginTextStyle = {
  color: "#ccc",
};

const loginLinkStyle = {
  color: "#000000",
  fontWeight: "bold",
  cursor: "pointer",
  textDecoration: "underline",
  transition: "color 0.3s ease",
};
