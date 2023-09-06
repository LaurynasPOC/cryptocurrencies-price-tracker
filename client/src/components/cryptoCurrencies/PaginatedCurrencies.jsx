import React from "react";
import CurrenciesTable from "./CurrenciesTable";
import { ReactPaginateStyles } from "./styled";

const PaginatedCurrencies = ({
  itemsPerPage,
  filteredCryptoCurrencies,
  itemOffset,
  setItemOffset,
}) => {
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = filteredCryptoCurrencies.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredCryptoCurrencies.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % filteredCryptoCurrencies.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <CurrenciesTable filteredCryptocurrencies={currentItems} />
      <ReactPaginateStyles
        activeClassName={"active"}
        breakLabel={"..."}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
      />
    </>
  );
};

export default PaginatedCurrencies;
