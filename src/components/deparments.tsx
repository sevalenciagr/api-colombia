import React, { useEffect, useState } from "react";
import { Ciudad, DeparmentResponse, Department } from "../interfaces/deparment";

export default function DepartmentsData() {
  const [data, setData] = useState<Department[]>();
  const [cuidades,setCiudades] = useState<Ciudad>();


  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api-colombia.com/api/v1/Department");
      const data = await response.json();
      setData(data);
      // for (const department of data) {
      //   const deparments = await fetch(
      //     `https://api-colombia.com/api/v1/Department/${department.id}/cities`
      //   );
      //   const departmentData:DeparmentResponse = await deparments.json();
      //   console.log(departmentData);
      //   setCiudades(departmentData)
        
      // }
    }
  
    fetchData();
  }, []);

  if (!data) {
    return <div>Cargando...</div>;
  }
  return (
    <div className="deparments">
      
      {data.map((item) => (
        <div className="card" key={item.id}>Deparment:{item.name}
        </div>
      ))}
      
    </div>
    
    
    
  );
}
