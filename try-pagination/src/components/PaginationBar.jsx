import React, { useEffect, useState } from "react";

import PageButton from "./PageButton";

const createPages = (pagesCount) => {
  return [...Array(pagesCount).keys()];
};

function PaginationBar(props) {
  const { dataCount, setClickPage } = props;

  const [pagesCount, setPagesCount] = useState([1]);
  console.log(dataCount);
  console.log(pagesCount);

  // #TODO: isLoading
  useEffect(() => {
    setPagesCount(() => {
      return createPages(dataCount / 2);
    });
  }, [dataCount]);

  return (
    <ul className="flex">
      {pagesCount.map((pageNum, i) => {
        return (
          <PageButton key={i} pageNum={pageNum} setClickPage={setClickPage} />
        );
      })}
      {/* {totalPages.map((pageNum, i) => {
        return (
          <PageButton key={i} pageNum={pageNum} setClickPage={setClickPage} />
        );
      })} */}
    </ul>
  );
}

export default PaginationBar;
