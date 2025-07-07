import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const datasets = [
  {
    id: 1,
    title: "COVID-19 Türkiye Verileri",
    description: "Günlük vaka, iyileşme ve ölüm sayıları – Sağlık Bakanlığı.",
    images: [
      { name: "covid-19-grafik1.png", size: "200KB" },
      { name: "covid-19-haritasi.jpg", size: "350KB" },
    ],
  },
  {
    id: 2,
    title: "İstanbul Trafik Yoğunluğu",
    description: "İBB saatlik trafik verileri.",
    images: [
      { name: "trafik-haritasi1.png", size: "150KB" },
      { name: "trafik-haritasi2.png", size: "180KB" },
    ],
  },
];

const DatasetDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dataset = datasets.find((d) => d.id === parseInt(id));

  if (!dataset) {
    return <p>Veri kümesi bulunamadı!</p>;
  }

  return (
    <div className="dataset-detail-container">
      <button onClick={() => navigate(-1)}>← Geri Dön</button>
      <h2>{dataset.title}</h2>
      <p>{dataset.description}</p>

      <h3>Yüklenen Fotoğraflar</h3>
      <table border="1" cellPadding="8" style={{ marginBottom: "20px" }}>
        <thead>
          <tr>
            <th>Dosya Adı</th>
            <th>Boyut</th>
          </tr>
        </thead>
        <tbody>
          {dataset.images.map((img, index) => (
            <tr key={index}>
              <td>{img.name}</td>
              <td>{img.size}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={() => alert("Tüm veriler indiriliyor...")}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
         Tümünü İndir
      </button>
    </div>
  );
};

export default DatasetDetail;
