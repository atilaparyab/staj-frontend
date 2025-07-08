import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#bebebd ",
        color: "rgb(255, 255, 255)",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      
      <div style={{ flex: 1, textAlign: "left", fontWeight: "bold", fontSize: "1.1rem" }}>
        DataCortex
      </div>

      
      <div style={{ flex: 1, textAlign: "center", fontSize: "0.85rem" }}>
        © {new Date().getFullYear()} Tüm hakları saklıdır.
      </div>

   
      <div style={{ flex: 1, textAlign: "right" }}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <i className="fab fa-x-twitter"></i>
        </a>
        <a href="mailto:destek@togg.io" style={iconStyle}>
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={iconStyle}>
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </footer>
  );
}


const iconStyle = {
  color: "rgb(255, 255, 255)",
  fontSize: "1.2rem",
  marginLeft: "15px",
  textDecoration: "none",
  transition: "color 0.3s",
};


if (!document.getElementById("footer-hover-style")) {
  const styleTag = document.createElement("style");
  styleTag.id = "footer-hover-style";
  styleTag.innerHTML = `
    footer a:hover i {
      color:rgb(0, 0, 0);
    }
  `;
  document.head.appendChild(styleTag);
}

