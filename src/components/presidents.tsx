// import { useEffect, useState } from "react";
// import { President } from "../interfaces/president";

// export default function GetPresidentData() {
//   const [data, setData] = useState<President[]>();

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("https://api-colombia.com/api/v1/President");
//       const data = await response.json();
//       setData(data);
//     }

//     fetchData();
//   }, []);

//   if (!data) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 p-4">
//       {data.map((item) => (
//         <div className="col mb-4" key={item.id}>
//           <div className="card h-100 ">
//             <img
//               src={item.image}
//               className="card-img-top"
//               alt={item.name}
//               style={{ objectFit: "contain" }}
//             />
//             <div className="card-body">
//               <h5 className="card-title">
//                 {item.name} {item.lastName}
//               </h5>
//             </div>
//           </div>
//         </div>
//       ))}
//           
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { President } from "../interfaces/president";

export default function GetPresidentData() {
  const [data, setData] = useState<President[]>();
  const [page, setPage] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api-colombia.com/api/v1/President/pagedList?page=${page}&size=10");
      const data = await response.json();
      setData(data.content);
    }

    fetchData();
  }, [page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 p-4">
        {data.map((item) => (
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

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${page === 0 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 0}
            >
              Previous
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" disabled>
              Page {page + 1}
            </button>
          </li>
          <li className={`page-item ${data.length < 10 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(page + 1)}
              disabled={data.length < 10}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
