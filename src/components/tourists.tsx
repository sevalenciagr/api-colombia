import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Tourist } from "../interfaces/tourist";

export default function GetTouristData() {
  const [data, setData] = useState<Tourist[]>();
  const [pageNumber, setPageNumber] = useState(1);
  const [searchResults, setSearchResults] = useState<Tourist[]>();
  const [searchQuery, setSearchQuery] = useState("");
  const [fetchData, setFetchData] = useState(false);

  const pageSize = 9;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api-colombia.com/api/v1/TouristicAttraction/pagedList?page=${pageNumber}&pageSize=${pageSize}`
      );
      const data = await response.json();
      console.log(data);

      setData(data.data);
    }

    fetchData();
  }, [fetchData, pageNumber]);

  async function search() {
    const response = await fetch(
      `https://api-colombia.com/api/v1/TouristicAttraction/search/${searchQuery}`
    );
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
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 p-4">
        {displayData?.map((item) => (
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
                  Longitude:{" "}
                  <span className="text-muted">{item.longitude}</span>{" "}
                </h6>
              </div>
            </div>
          </div>
        ))}
            
      </div>
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
            className={`page-item ${data && data.length < pageSize ? "disabled" : ""}`}
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
