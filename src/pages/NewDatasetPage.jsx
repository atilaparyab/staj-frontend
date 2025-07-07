import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewDatasetPage.css";

export default function NewDatasetPage() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Konu İsmi:", title);
    console.log("Yüklenen Görsel:", image);

    alert("Yeni veri kümesi başarıyla eklendi!");
    navigate("/datasets");
  };

  return (
    <div className="page-container">
      <div className="header">
        <h1> Yeni Veri Kümesi Yükle</h1>
      </div>

      <div className="form-card">
        <form onSubmit={handleSubmit} className="upload-form">
          <label htmlFor="image" className="form-label">
            Görsel Dosyası
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
            className="form-input"
          />

          <p className="info-text">
            Birden fazla dosya seçebilirsiniz. Konu seçilmezse dosya adı otomatik atanır.
          </p>

          <label htmlFor="title" className="form-label">
          Konu
          </label>
          <select
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="form-select"
          >
            <option value="">-- Konu Seçin --</option>
            <option value="Makine Öğrenimi">Makine Öğrenimi</option>
            <option value="Görüntü İşleme">Görüntü İşleme</option>
            <option value="NLP">NLP</option>
          </select>

          <button type="submit" className="upload-btn">
             Yükle
          </button>
        </form>
      </div>
    </div>
  );
}
