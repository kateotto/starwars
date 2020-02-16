import React from "react";
import { Link } from "react-router-dom";
import styles from "./Pagination.module.css";

const Pagination = ({ peoplePerPage, totalPeople, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPeople / peoplePerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <div className={styles.paginWrapper}>
        {pageNumbers.map((number, index) => (
          <Link
            to={`/${number}`}
            key={index}
            onClick={() => paginate(number)}
            className={styles.paginLink}
          >
            {number}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
