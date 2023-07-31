import React, { useRef } from "react";

const NavLinks = ({ id, name, bar, setBar }) => {
  const setClickRef = useRef(false);
  function handleClick(id) {
    if (!setClickRef.current) {
      setClickRef.current = true;
      const nodeList = document.querySelector("#" + id);
      window.scrollTo(
        0,
        nodeList.getBoundingClientRect().top + window.pageYOffset
      );
      setTimeout(() => {
        var link = document.getElementById(id + "_Link");
        link.click();
      }, 1000);
    }
    if (bar) {
      setBar(!bar);
    }
  }
  return (
    <span>
      <a
        href={`#${id}`}
        id={`${id}_Link`}
        onClick={() => {
          handleClick(id);
        }}
      >
        {name}
      </a>
    </span>
  );
};

export default NavLinks;
