import React, { useEffect, useState } from "react";
import { Colombia } from "../interfaces/colombia";

export default function GetColombianData() {
  const [data, setData] = useState<Colombia>();
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://api-colombia.com/api/v1/Country/Colombia"
      );
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card mb-3">
      <div className="card-body row ">
        <div className="col">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag-map_of_Colombia.svg/1502px-Flag-map_of_Colombia.svg.png"
            className="img-fluid"
            alt="Image Colombia"
          />
        </div>
        <div className="col d-flex align-items-center">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Description:</strong>{" "}
              {showMore ? data.description : `${data.description.slice(0, 100)}...`}
              <button
                className="btn btn-link"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Read less" : "Read more"}
              </button>
            </li>
            <li className="list-group-item">
              <strong>Languages:</strong> {data.languages.join(", ")}
            </li>
            <li className="list-group-item">
              <strong>Population:</strong> {data.population}
            </li>
            <li className="list-group-item">
              <strong>Currency:</strong> {data.currency}
            </li>
            <li className="list-group-item">
              <strong>TimeZone:</strong> {data.timeZone}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

