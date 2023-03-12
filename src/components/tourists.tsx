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
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 p-4">
      {data.map((item) => (
        <div className="col mb-4" key={item.id}>
          <div className="card h-100">
            <img
              className="card-img-top"
              src={item.images[0]}
              alt={item.name}
              style={{ maxHeight: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h6 className="card-text ">
                {" "}
                Latitude:<span className="text-muted">
                  {" "}
                  {item.latitude}
                </span>{" "}
                Longitude: <span className="text-muted">{item.longitude}</span>{" "}
              </h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}