import React, { useEffect, useState } from 'react';

import PaginationButton from './PaginationButton';

const createPages = (pagesCount) => {
  return [...Array(pagesCount).keys()];
};
/* end of createPages(pagesCount) */

function PaginationBar(props) {
  const { dataCount, setClickPage } = props;

  const [pagesCount, setPagesCount] = useState([1]);
  // console.log(dataCount, pagesCount);

  // #TODO: isLoading
  useEffect(() => {
    setPagesCount(() => {
      return createPages(dataCount / 2);
    });
  }, [dataCount]);

  return (
    <ul className="flex">
      {pagesCount.map((pageNum, i) => {
        const pageString = pageNum + 1;
        // console.log('pageString', pageString);

        return (
          <PaginationButton
            key={i}
            pageString={pageString}
            pageNum={pageNum}
            setClickPage={setClickPage}
          />
        );
      })}
    </ul>
  );
}
/* end of PaginationBar() */

export default PaginationBar;
