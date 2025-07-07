import React from "react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hakkımızda</h1>
      <p style={styles.paragraph}>
        <strong>DataCortex</strong>, kullanıcıların veri kümelerini keşfetmesine, analiz etmesine ve paylaşmasına olanak tanıyan modern bir platformdur. 
        Amacımız, araştırmacılar, veri bilimcileri ve meraklılar için kolayca erişilebilir ve kullanışlı bir deneyim sunmaktır.
      </p>
      <p style={styles.paragraph}>
        Platformumuz, yüklenen veri kümelerini görselleştirme, düzenleme ve paylaşma özellikleri ile öne çıkar. 
        Kullanıcılarımız için her zaman basit, hızlı ve etkili çözümler üretmeyi hedefliyoruz.
      </p>
      <p style={styles.paragraph}>
        Daha fazla bilgi almak veya bizimle iletişime geçmek için <a href="mailto:info@datacortex.io" style={styles.link}>info@datacortex.io</a> adresinden bize ulaşabilirsiniz.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",           
    flexDirection: "column",   
    minHeight: "100vh",        
    padding: "40px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    lineHeight: "1.8",
  },
  content: {
    flex: 1, 
  },
  backButton: {
    marginBottom: "20px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "8px 14px",
    cursor: "pointer",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#222",
  },
  paragraph: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "16px",
  },
  link: {
    color: "#2196f3",
    textDecoration: "none",
  },
  footer: {
    backgroundColor: "#222",
    color: "#fff",
    textAlign: "center",
    padding: "12px 0",
  },
};


export default AboutPage;
