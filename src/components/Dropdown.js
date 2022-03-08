import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ option, selected, onSelectChange, title }) => {
  const [state, setState] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener(
      "click",
      (e) => {
        if (ref.current.contains(e.target)) {
          return null;
        }

        setState(false);
      },
      { capture: true }
    );
  }, []);

  const renderList = option.map((opt) => {
    if (selected.value === opt.value) {
      return null;
    }

    return (
      <div
        key={opt.value}
        className={`dropdown-item ${state ? "" : "hidden"}`}
        onClick={() => {
          onSelectChange(opt);
          setState(!state);
        }}
      >
        {opt.option}
      </div>
    );
  });

  return (
    <div className="dropdown-container" ref={ref}>
      <label>Select a {title}</label>
      <div
        className="selected"
        onClick={() => {
          setState(!state);
        }}
      >
        {selected.option}
      </div>
      <div>{renderList}</div>
    </div>
  );
};

export default Dropdown;
