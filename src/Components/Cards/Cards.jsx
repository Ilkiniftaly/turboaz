import { useEffect } from "react";
import { useState } from "react";
import "./Cards.css";

function Cards() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loding, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("/data.json");
        if (!resp.ok) throw new Error("Data gorunmur");
        const data = await resp.json();
        setItems(data);
      } catch (error) {
        setError("Error");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loding) <div>Lading ...</div>;
  if (error) <div>404</div>;
  const [id, setId] = useState("");
  const getId = (element) => {
    setId(element.Image);
  };
  return (
    <div>
      {items.map((element) => (
        <div
          key={element.Mühərrik}
          onClick={() => {
            getId(element);
          }}
        >
          {element.Mühərrik}
          <div></div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
