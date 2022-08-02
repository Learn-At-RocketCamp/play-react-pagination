import React from 'react';

function PaginationButton(props) {
  const { pageString, pageNum, setClickPage } = props;

  return (
    <li>
      <input
        value={pageString}
        // value={pageNum}
        type="button"
        className="p-1 text-cyan-500 hover:text-cyan-700 hover:underline"
        onClick={() => {
          console.log(`CLICK-PAGE-${pageNum}`);

          setClickPage(pageNum);
        }}
      />
    </li>
  );
}
/* end of PaginationButton() */

export default PaginationButton;
