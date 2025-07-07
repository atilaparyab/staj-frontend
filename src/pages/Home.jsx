import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const containerStyle = {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column", 
    justifyContent: "space-between",
    boxSizing: "border-box",
  };

  const mainContentStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 50px",
    flex: "1 0 auto", 
  };

  const textStyle = {
    textAlign: "left",
    maxWidth: "50%",
  };

  const buttonContainerStyle = {
    marginTop: "20px",
    display: "flex",
    gap: "15px",
  };

  const linkStyle = {
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "white",
    textDecoration: "none",
    borderRadius: "20px",
    marginBottom: "30px",
    transition: "background-color 0.3s, transform 0.2s",
  };

  const linkHoverStyle = {
    backgroundColor: "#555",
    transform: "scale(1.05)",
  };

  const imageStyle = {
    maxWidth: "50%",
    height: "auto",
  };

  const middleSectionStyle = {
  padding: "60px 50px",
  backgroundColor: "#f7f7f7",
  textAlign: "left", 
  fontSize: "1.3rem",
  fontWeight: "bold",
  color: "#333",
};


  return (
    <div style={containerStyle}>
      
      <div style={mainContentStyle}>
        <div style={textStyle}>
          <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>DataCortex</h1>
         
         <p style={{ fontSize: "1.2rem", maxWidth: "600px", color: "#6c757d" }}>
          Görsellerini yükle, etiketle ve anotasyonlarını kolayca yönet.
          Gelişmiş yapay zeka destekli bir deneyimle tanış!
         </p>

          <div style={buttonContainerStyle}>
            <a
              href="/signup"
              style={linkStyle}
              onMouseOver={(e) =>
                Object.assign(e.target.style, linkHoverStyle)
              }
              onMouseOut={(e) => Object.assign(e.target.style, linkStyle)}
            >
              Kayıt Ol
            </a>
            <a
              href="/login"
              style={linkStyle}
              onMouseOver={(e) =>
                Object.assign(e.target.style, linkHoverStyle)
              }
              onMouseOut={(e) => Object.assign(e.target.style, linkStyle)}
            >
              Giriş Yap
            </a>
          </div>
        </div>
        <img src="/FOTO9.png" alt="Bilim insanları" style={imageStyle} />
      </div>

      
    <div
  style={{
    ...middleSectionStyle,
    padding: "15px 25px", 
  }}
>
  <h2 style={{ marginBottom: "20px", fontSize: "1.3rem" }}>
    Kimler <span style={{ color: "#000000" }}>DataCortex</span> kullanıyor?
  </h2>

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      gap: "20px", 
      flexWrap: "wrap", 
    }}
  >
    
    <div style={{ flex: "1", minWidth: "200px" }}>
      <h3
        style={{
          fontWeight: "600",
          marginBottom: "8px",
          fontSize: "0.9rem",
        }}
      >
        Öğrenciler
      </h3>
      <p style={{ color: "#6c757d", fontSize: "0.8rem", lineHeight: "1.5" }}>
        Derslerde projeler hazırlamak ve veri kümeleri üzerinde çalışmak için
        DataCortex'i kullanıyorlar.
      </p>
    </div>

   
    <div style={{ flex: "1", minWidth: "200px" }}>
      <h3
        style={{
          fontWeight: "600",
          marginBottom: "8px",
          fontSize: "0.9rem",
        }}
      >
        Geliştiriciler
      </h3>
      <p style={{ color: "#6c757d", fontSize: "0.8rem", lineHeight: "1.5" }}>
        Modelleri eğitmek, verileri etiketlemek ve projelerini kolayca yönetmek
        için tercih ediyorlar.
      </p>
    </div>

    
    <div style={{ flex: "1", minWidth: "200px" }}>
      <h3
        style={{
          fontWeight: "600",
          marginBottom: "8px",
          fontSize: "0.9rem",
        }}
      >
        Araştırmacılar
      </h3>
      <p style={{ color: "#6c757d", fontSize: "0.8rem", lineHeight: "1.5" }}>
        Yapay zeka araştırmalarını desteklemek için veri kümelerini analiz
        ediyor ve sonuçlar üretiyorlar.
      </p>
    </div>
  </div>
</div>



    </div>
  );
}


