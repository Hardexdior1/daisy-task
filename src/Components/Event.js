import React from "react";
import { Link } from "react-router-dom";
import Watches from "./BlogData";

const Event = () => {
  return (
    <div>
      {Watches.map((item) => {
        return (
          <Link to={"/Event/" + item.id}>
            <div key={item.id}>
              <h1>{item.name}</h1>
              <h1>{item.price}</h1>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Event;
