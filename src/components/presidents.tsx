import { useEffect, useState } from "react";
import { President } from "../interfaces/president";

export default function GetPresidentData() {
  const [data, setData] = useState<President[]>();


  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api-colombia.com/api/v1/President");
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
        // <li className="list-group-item" key={item.id}>{item.name}
        // </li>
      <div className="card">
      <div className="card-body row ">
        <div className="col d-flex align-items-center">
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><img src={item.image} alt={item.name} /></li>
            <li className="list-group-item">{item.name} {item.lastName}</li>
        </ul>
        </div>
      </div>
    </div>
      ))}
      
    </ul>
    
    
    
  );
}