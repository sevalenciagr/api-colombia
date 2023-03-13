import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { City } from "../interfaces/city";

export default function GetCityData() {
  const [data, setData] = useState<City[]>();
  const [pageNumber, setPageNumber] = useState(1);
  const [searchResults, setSearchResults] = useState<City[]>();
  const [searchQuery, setSearchQuery] = useState("");
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

  async function search() {
    const response = await fetch(`https://api-colombia.com/api/v1/City/search/${searchQuery}`);
    const data = await response.json();
    setSearchResults(data);
  }

  function handleSearchQueryChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
  }

  function handleSearchSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    search();
  }

  const displayData = searchResults ?? data;

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <form onSubmit={handleSearchSubmit}>
        <div className="mb-3">
          <label htmlFor="searchQuery" className="form-label">
            Search:
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="searchQuery"
              value={searchQuery}
              onChange={handleSearchQueryChange}
            />
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
      </form>
      <Row className="mt-5 p-4">
        {displayData && displayData.length > 0 ? (
          displayData.map((item) => (
            <Col key={item.id} sm={6} md={4} lg={3}>
              <div className="card border-primary mb-3">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                </div>
              </div>
            </Col>
          ))
        ) : (
          <div>No results found</div>
        )}
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
