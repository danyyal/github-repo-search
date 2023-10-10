import React from "react";
import "./Paginator.scss";
const Pagination = ({
  currentPage,
  totalCount,
  onPageChange,
}: {
  currentPage: number;
  totalCount: number;
  onPageChange: (val: number) => void;
}) => {
  const totalPages = Math.ceil(totalCount / 10);
  const pageNumbers = [];

  const pageRange = 2;

  for (
    let i = Math.max(1, currentPage - pageRange);
    i <= Math.min(totalPages, currentPage + pageRange);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        <div style={{ marginRight: "10px", paddingTop: "22px" }}>
          <b>Total results {totalCount}</b>
        </div>
        {currentPage !== 1 && (
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => onPageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>
        )}
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`page-item ${
              pageNumber === currentPage ? "active" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        {currentPage !== totalPages && (
          <li className="page-item">
            <button
              className="page-link"
              onClick={() => onPageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
