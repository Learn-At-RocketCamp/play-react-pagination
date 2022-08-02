import React, { useEffect, useState } from 'react';

import ListItem from './ListItem';
import PaginationBar from './PaginationBar';

const sliceData = (data, currentPageIndex = 0) => {
  console.log('slice-data-currentPageIndex:', data, currentPageIndex);

  return [...data].slice(currentPageIndex, currentPageIndex + 2);
};
/* end of sliceData(data, currentPage) */

function ListData(props) {
  const { data } = props;

  const [clickPage, setClickPage] = useState(0);

  const [partData, setPartData] = useState([]);
  /**
   * #NOTE: render-issue
   * - `[]` === `true`
   */
  // const [partData, setPartData] = useState([{title: 'loading...'}]);
  // const [partData, setPartData] = useState(() => {
  //   return sliceData(data, clickPage * 2);
  // });
  // console.log('part-length::', partData.length);
  // console.log(Boolean(partData));
  // console.log(Boolean([]));

  useEffect(() => {
    const currentPageIndex = clickPage * 2;

    setPartData(() => {
      return sliceData(data, currentPageIndex);
    });

    // if (data) {
    //   const currentPage = clickPage * 2;

    //   setPartData(() => {
    //     return sliceData(data, currentPage);
    //   });
    // }
    /**
     * #NOTE: render-issue
     * - ANS: MUST have [data] or nothing at first
     */
  }, [data, clickPage]);

  return (
    <section className="flex flex-col items-center p-2">
      <p className="text-lg font-bold">This is A List.</p>

      <ul className="py-2">
        {partData.map((item) => {
          return <ListItem key={item.id} item={item} />;
        })}
      </ul>

      <nav>
        <PaginationBar
          dataCount={data.length}
          setClickPage={setClickPage}
          // totalPages={totalPages}
        />
      </nav>
    </section>
  );
}
/* end of ListData() */

export default ListData;
