import React, { useEffect, useState } from "react";
import "./Promotions.css";
import { fetchItems } from "../../utils/fetchItems";

const Promotions = () => {
  const [promotions, setPromotions] = useState([]);
  const url =
    "https://examen-databas-default-rtdb.europe-west1.firebasedatabase.app/promotions/.json";

  useEffect(() => {
    fetchItems(url).then((promotionsArray) => {
      setPromotions(promotionsArray);
    });
  }, []);

  return (
    <div className="promotions">
      <div className="promotions-item">
        <div className="promotions-image-container">
          {promotions.map((i) => {
            return <img key={i.id} src={i.image} alt="Promotion" />;
          })}
        </div>
        <h3>Late Spring Sale - 15% Discount on Jackets</h3>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Promotions;
