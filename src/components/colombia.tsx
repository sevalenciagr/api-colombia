import React, { useEffect, useState } from 'react'
import { Colombia } from '../interfaces/colombia';

export default function GetColombianData() {
  const [data, setData] = useState<Colombia | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api-colombia.com/api/v1/Country/Colombia');
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);

  if (!data) {
    return <div>Cargando...</div>;
  }
  return (
    <div>
      <h1>{data.name}</h1>
      <p>Código ISO: {data.isoCode}</p>
      <p>Capital: {data.stateCapital}</p>
      <p>Moneda: {data.currency}</p>
      <p>Población: {data.population}</p>
      <p>Idiomas: {data.languages.join(', ')}</p>
      {/* Agrega más campos según los datos que quieras mostrar */}
    </div>
    
  )
}