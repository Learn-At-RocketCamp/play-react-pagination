import React from "react";

function PageButton(props) {
  const { pageNum, setClickPage } = props;

  return (
    <li className="">
      <input
        type="button"
        value={pageNum}
        className="bg-yellow-100 p-1"
        onClick={() => {
          console.log(`CLICK-PAGE-${pageNum}`);

          setClickPage(pageNum);
        }}
      />
    </li>
  );
}

export default PageButton;
