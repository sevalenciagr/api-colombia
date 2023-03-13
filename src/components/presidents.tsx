import { useEffect, useState } from "react";
import { President } from "../interfaces/president";

export default function GetPresidentData() {
  const [data, setData] = useState<President[]>();
  const [pageNumber, setPageNumber] = useState(1);
  const [searchResults, setSearchResults] = useState<President[]>();
  const [searchQuery, setSearchQuery] = useState("");
  const [fetchData, setFetchData] = useState(false);

  const pageSize = 3;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api-colombia.com/api/v1/President/pagedList?page=${pageNumber}&pageSize=${pageSize}`
      );
      const data = await response.json();
      setData(data.data);
    }

    fetchData();
  }, [fetchData, pageNumber]);

  async function search() {
    const response = await fetch(
      `https://api-colombia.com/api/v1/President/search/${searchQuery}`
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

  if (!displayData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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
        {displayData.map((item) => (
          <div className="col mb-4" key={item.id}>
            <div className="card h-100 ">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.name}
                style={{ objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {item.name} {item.lastName}
                </h5>
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
    </div>
  );
}
