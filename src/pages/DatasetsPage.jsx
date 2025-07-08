import { useState } from "react";
import "./DatasetsPage.css";
import { FiSearch, FiUpload, FiEye, FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const DatasetsPage = () => {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const goToNewDataset = () => {
    navigate("/datasets/new");
  };

  const handleNavigation = (path) => {
    navigate(path);
    setSidebarOpen(false); 
  };

  const tags = ["Makine Öğrenimi", "COVID-19", "Görüntü İşleme", "Trafik"];
  const datasets = [
    {
      id: 1,
      title: "COVID-19 Türkiye Verileri",
      description: "Günlük vaka, iyileşme ve ölüm sayıları – Sağlık Bakanlığı.",
      image: "data:image/jpeg;base64,...",
    },
    {
      id: 2,
      title: "İstanbul Trafik Yoğunluğu",
      description: "İBB saatlik trafik verileri.",
      image: "data:image/jpeg;base64,...",
    },
  ];

  return (
    <div className="datasets-page">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {sidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
        {sidebarOpen && (
          <>
            <h2>DataCortex</h2>
            <ul>
              <li onClick={() => handleNavigation("/")}>Anasayfa</li>
              <li onClick={() => handleNavigation("/veri-kumeleri")}>Veri Kümeleri</li>
              <li onClick={() => handleNavigation("/konular")}>Konular</li>
              <li onClick={() => handleNavigation("/tartismalar")}>Tartışmalar</li>
              <li onClick={() => handleNavigation("/about")}>Hakkımızda</li>
            </ul>
          </>
        )}

         <div className="sidebar-bottom">
    <button
      className="auth-btn"
      onClick={() => navigate("/signup")}
    >
      Kayıt
    </button>
    <button
      className="auth-btn"
      onClick={() => navigate("/login")}
    >
      Giriş
    </button>
  </div>
  </div>

      

      {/* Ana İçerik */}
      <div
        className={`datasets-container ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}
      >
        <h1>Veri Kümeleri</h1>
        <p className="description">Verileri keşfet, analiz et ve paylaş.</p>
        <button className="new-btn" onClick={goToNewDataset}>
          + Yeni Görsel Yükle
        </button>
        <button className="new-btn">Veri Kümelerini Gör</button>

        <div className="search-bar">
          <div className="search-input-wrapper">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Veri kümesi ara..." />
          </div>
        </div>

        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="datasets">
          {datasets.map((dataset) => (
            <div key={dataset.id} className="dataset-card">
              <img
                src={dataset.image}
                alt={dataset.title}
                className="dataset-image"
              />
              <div className="dataset-content">
                <h3>{dataset.title}</h3>
                <p>{dataset.description}</p>
                <div className="dataset-buttons">
                  <button
                    className="dataset-upload-btn"
                    onClick={goToNewDataset}
                  >
                    <FiUpload /> Yükle
                  </button>
                  <button
                    className="dataset-browse-btn"
                    onClick={() => navigate(`/datasets/${dataset.id}`)}
                  >
                    <FiEye /> Gözat
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DatasetsPage;


