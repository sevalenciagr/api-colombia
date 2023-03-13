import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Ciudad, DeparmentResponse, Department } from "../interfaces/deparment";
export default function DepartmentsData() {
  const [data, setData] = useState<Department[]>();
  // const [cuidades,setCiudades] = useState<Ciudad>();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api-colombia.com/api/v1/Department"
      );
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
