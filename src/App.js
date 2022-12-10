import { useEffect, useState } from "react";
import "./App.css";
import allData from "./components/Data";
import Items from "./components/Items";
import dot from "./img/menu.png";

function App() {
  const [width, setWidth] = useState(getWindowDimensions());
  const [dropdownActive, setDropdownActive] = useState(false);
  const first_name = "FIRST_NAME";

  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width;
  }

  const sortASC = () => {
    allData.sort((a, b) => {
      const nameA = a.first_name.toUpperCase();
      const nameB = b.first_name.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
    setDropdownActive(false);
  };

  const sortDsc = () => {
    allData.sort((a, b) => {
      const nameA = a.first_name.toUpperCase();
      const nameB = b.first_name.toUpperCase();
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
      return 0;
    });
    setDropdownActive(false);
  };

  const unsort = () => {
    allData.sort((a, b) => {
      return a.id - b.id;
    });
    setDropdownActive(false);
  };

  useEffect(() => {
    function handleResize() {
      setWidth(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <div className="tag">
        <div className="sort">
          <img
            src={dot}
            alt="dot"
            onClick={() => setDropdownActive(!dropdownActive)}
          />
          <p>{width < 1100 ? first_name.substring(0, 3) : first_name}</p>
        </div>
        <p className="textOverflow">last_name</p>
        <p className="textOverflow">Email ID</p>
        <p className="textOverflow">gender</p>
        <p className="textOverflow">ip_address</p>
        <p className="textOverflow">airport_code</p>
        <p className="textOverflow">time</p>
        <p className="textOverflow">status</p>
        <p className="textOverflow">mobile</p>
        <p className="textOverflow">area</p>
        <p className="textOverflow">show</p>
        <p className="textOverflow">edit</p>
      </div>

      {dropdownActive && (
        <div className="dropdown">
          <button onClick={unsort}>unsort</button>
          <button onClick={sortASC}>Sort by ASC</button>
          <button onClick={sortDsc}>Sort by DESC</button>
        </div>
      )}

      <Items AllData={allData} />
    </div>
  );
}

export default App;
