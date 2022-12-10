import React, { useState } from "react";

const Items = ({ AllData }) => {
  const [id, setId] = useState(null);
  return (
    <div className="container">
      {AllData.map((data, ind) => (
        <div
          key={ind}
          className={`row ${id === ind ? "changeBackground" : ""}`}
          onClick={() => setId(ind)}
        >
          <p className="textOverflow">{data.first_name}</p>
          <p className="textOverflow">{data.last_name}</p>
          <p className="textOverflow">{data.email}</p>
          <p className="textOverflow">{data.gender}</p>
          <p className="textOverflow">{data.ip_address}</p>
          <p className="textOverflow">{data.airport_code}</p>
          <p className="textOverflow">{data.time}</p>
          <p
            className={`textOverflow ${
              data.status === "true" ? "green" : "red"
            }`}
          >
            {data.status}
          </p>
          <p className="textOverflow">{data.mobile}</p>
          <p className="textOverflow">{data.area}</p>
          <p className="textOverflow">{data.show}</p>
          <p className="textOverflow">{data.edit}</p>
        </div>
      ))}
    </div>
  );
};

export default Items;
