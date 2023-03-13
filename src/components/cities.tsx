import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { City } from "../interfaces/city";

export default function GetCityData() {
  const [data, setData] = useState<City[]>();
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchData, setFetchData] = useState(false);

  const pageSize = 24;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api-colombia.com/api/v1/City/pagedList?page=${pageNumber}&pageSize=${pageSize}`
      );
      const data = await response.json();
      console.log(data);

      setData(data.data);
    }

    fetchData();
  }, [fetchData, pageNumber]);

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

      <div className="d-flex justify-content-center">
        <ul className="pagination">
          <li className={`page-item ${pageNumber === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setPageNumber(pageNumber - 1)}
            >
              Previous
            </button>
          </li>
          <li className="page-item active">
            <a className="page-link">{pageNumber}</a>
          </li>
          <li
            className={`page-item ${data.length < pageSize ? "disabled" : ""}`}
          >
            <button
              className="page-link"
              onClick={() => {
                setPageNumber(pageNumber + 1);
                setFetchData(!fetchData);
              }}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </Container>
  );
}
