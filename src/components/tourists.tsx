import { useEffect, useState } from "react";
import { Tourist } from "../interfaces/tourist";
import "tourist.css";


export default function GetTouristData() {
  const [data, setData] = useState<Tourist[]>();


  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api-colombia.com/api/v1/TouristicAttraction");
      const data = await response.json();
      setData(data);
    }
  
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  
  return (
    <ul className="list-group list-group-flush">
      
      {data.map((item) => (
      
      <div className="deparments">
        <div className="card" style={{width:'18rem'}}>
          <img className="card-img-top w-100 h-100" src={item.images[0]} alt={item.name} />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Latitude: {item.latitude} Longitude: {item.longitude}</p>
          </div>
        </div>
      </div>
      ))}
      
    </ul>
    
    
    
  );
}