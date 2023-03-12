import { useEffect, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { City } from "../interfaces/city";



export default function GetPresidentData() {
  const [data, setData] = useState<City[]>();


  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api-colombia.com/api/v1/City");
      const data = await response.json();
      setData(data);
    }
  
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <Container>
      <Row className="mt-5 p-4">
      {data.map((item) => (
        <Col key={item.id} sm={6} md={4} lg={3}>
          <div className="card border-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
            </div>
          </div>
        </Col>
      ))}
    </Row>   
    </Container>
  );
}