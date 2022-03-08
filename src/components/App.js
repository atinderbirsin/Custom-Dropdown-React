import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "./App.css";

const options = [
  {
    option: "The color Red",
    value: "red",
  },
  {
    option: "The color Green",
    value: "green",
  },
  {
    option: "A shade of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Dropdown
        option={options}
        selected={selected}
        onSelectChange={setSelected}
        title="option"
      />
    </div>
  );
};

export default App;
