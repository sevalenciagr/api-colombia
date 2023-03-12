import { useEffect, useState } from "react";
import { Tourist } from "../interfaces/tourist";

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
      <div className="card" style={{width:'25rem'}}>
        <li className="list-group-item card-img-top"><img src={item.images[0]} alt={item.name} /></li>
        <h5 className="list-group-item card-title">{item.name}</h5>
        <li className="list-group-item card-text">Latitude: {item.latitude} Longitude: {item.longitude}</li>
      </div>
      ))}
      
    </ul>
    
    
    
  );
}